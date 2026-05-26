import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Upload,
  Calendar,
  ShieldCheck,
  FileText,
  AlertCircle,
  Gavel,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  ChevronLeft,
  Search,
  History,
  Trophy,
  EyeOff,
  ChevronDown,
  Plus,
  MapPin,
  Info,
  BookOpen,
  FileBadge,
  Sparkles,
} from "lucide-react";
import { ROUTES, APP_NAME, cn } from "../constants";
import { motion } from "motion/react";
import { useAuth } from "../context/AuthContext";
import { UserRole } from "../types";
import dashboardLogo from "../assets/logo.png";

type NavItem = {
  icon: React.ElementType;
  label: string;
  path: string;
  roles: UserRole[];
};

type ConcoursItem = {
  id: string;
  name: string;
  code: string;
  session: string;
  status: string;
  period: string;
  track: string;
};

type ConcoursFormState = {
  name: string;
  code: string;
  session: string;
  status: string;
  period: string;
  track: string;
  description: string;
};

const {
  ADMIN,
  CFD_HEAD,
  COORDINATOR,
  CORRECTOR,
  SUPERVISOR,
  JURY_PRESIDENT,
  JURY_MEMBER,
  ANONYMITY_COMMISSION,
} = UserRole;

const ALL_NAV_ITEMS: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: ROUTES.DASHBOARD,
    roles: [],
  },
  {
    icon: Users,
    label: "Candidates",
    path: ROUTES.CANDIDATES,
    roles: [ADMIN, CFD_HEAD, COORDINATOR],
  },
  {
    icon: Calendar,
    label: "Exam Planning",
    path: ROUTES.EXAM_PLANNING,
    roles: [],
  },
  {
    icon: ShieldCheck,
    label: "Supervisors (PWA)",
    path: ROUTES.SUPERVISOR,
    roles: [ADMIN, CFD_HEAD, COORDINATOR, SUPERVISOR],
  },
  {
    icon: EyeOff,
    label: "Anonymization",
    path: ROUTES.ANONYMIZATION,
    roles: [ADMIN, CFD_HEAD, ANONYMITY_COMMISSION],
  },
  {
    icon: FileText,
    label: "Correction",
    path: ROUTES.CORRECTION,
    roles: [ADMIN, CFD_HEAD, COORDINATOR, CORRECTOR],
  },
  {
    icon: AlertCircle,
    label: "Discrepancies",
    path: ROUTES.DISCREPANCIES,
    roles: [ADMIN, CFD_HEAD, COORDINATOR],
  },
  {
    icon: Gavel,
    label: "Deliberation",
    path: ROUTES.DELIBERATION,
    roles: [ADMIN, CFD_HEAD, JURY_PRESIDENT, JURY_MEMBER],
  },
  {
    icon: Trophy,
    label: "Results",
    path: ROUTES.RESULTS,
    roles: [ADMIN, CFD_HEAD, JURY_PRESIDENT],
  },
  { icon: History, label: "Audit Trail", path: ROUTES.AUDIT, roles: [ADMIN] },
  { icon: Users, label: "Users", path: ROUTES.USERS, roles: [ADMIN] },
  { icon: Settings, label: "Settings", path: ROUTES.SETTINGS, roles: [ADMIN] },
];

const ROLE_LABELS: Record<UserRole, string> = {
  [ADMIN]: "Administrator",
  [CFD_HEAD]: "CFD Head",
  [COORDINATOR]: "Coordinator",
  [CORRECTOR]: "Corrector",
  [SUPERVISOR]: "Supervisor",
  [JURY_PRESIDENT]: "Jury President",
  [JURY_MEMBER]: "Jury Member",
  [ANONYMITY_COMMISSION]: "Anon. Commission",
};

const STATIC_CONCOURS: ConcoursItem[] = [
  {
    id: "conc-2026-ai",
    name: "Doctoral Concours - Artificial Intelligence",
    code: "CONC-2026-AI",
    session: "2026 Session",
    status: "Open",
    period: "12 Jun - 03 Jul 2026",
    track: "Computer Science",
  },
  {
    id: "conc-2026-data",
    name: "Doctoral Concours - Data Engineering",
    code: "CONC-2026-DATA",
    session: "2026 Session",
    status: "Preparation",
    period: "18 Jun - 12 Jul 2026",
    track: "Information Systems",
  },
  {
    id: "conc-2025-health",
    name: "Doctoral Concours - Digital Health",
    code: "CONC-2025-HEALTH",
    session: "2025 Archive",
    status: "Closed",
    period: "05 Sep - 18 Oct 2025",
    track: "Biomedical Informatics",
  },
];

const INITIAL_CONCOURS_FORM: ConcoursFormState = {
  name: "",
  code: "",
  session: "2025/2026",
  status: "Open",
  period: "",
  track: "",
  description: "",
};

function getInitials(fullName: string, username: string = ""): string {
  const parts = fullName.trim().split(" ");
  if (parts.length >= 2)
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return (username || fullName || "?").slice(0, 2).toUpperCase();
}

export const AppShell = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConcoursMenuOpen, setIsConcoursMenuOpen] = useState(false);
  const [isCreateConcoursOpen, setIsCreateConcoursOpen] = useState(false);
  const [selectedConcoursId, setSelectedConcoursId] = useState(
    STATIC_CONCOURS[0].id,
  );
  const [concoursItems, setConcoursItems] = useState(STATIC_CONCOURS);
  const [concoursForm, setConcoursForm] = useState<ConcoursFormState>(
    INITIAL_CONCOURS_FORM,
  );
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const userRole = user?.profile?.role as UserRole | undefined;

  const sidebarItems = ALL_NAV_ITEMS.filter(
    (item) =>
      item.roles.length === 0 || (userRole && item.roles.includes(userRole)),
  );

  const handleLogout = async () => {
    await logout();
    navigate(ROUTES.LOGIN);
  };

  const fullName = user?.full_name || user?.username || "User";
  const initials = user ? getInitials(fullName, user.username ?? "") : "?";
  const roleLabel = userRole ? (ROLE_LABELS[userRole] ?? userRole) : "";
  const selectedConcours =
    concoursItems.find((item) => item.id === selectedConcoursId) ??
    concoursItems[0];

  const fieldClassName =
    "h-10 rounded-xl border border-[#E6DED4] bg-[#FCFBF9] px-3.5 text-[13px] outline-none transition-all placeholder:text-[#B1A69A] focus:border-[#8B7355] focus:bg-white focus:ring-4 focus:ring-[#8B7355]/10";

  const textareaClassName =
    "min-h-[96px] rounded-xl border border-[#E6DED4] bg-[#FCFBF9] px-3.5 py-3 text-[13px] outline-none transition-all placeholder:text-[#B1A69A] focus:border-[#8B7355] focus:bg-white focus:ring-4 focus:ring-[#8B7355]/10";

  const handleSelectConcours = (id: string) => {
    setSelectedConcoursId(id);
    setIsConcoursMenuOpen(false);
  };

  const handleCreateConcours = () => {
    const trimmedName = concoursForm.name.trim();
    if (!trimmedName) return;

    const newConcours: ConcoursItem = {
      id: `conc-${Date.now()}`,
      name: trimmedName,
      code: concoursForm.code.trim() || `CONC-${String(Date.now()).slice(-6)}`,
      session: concoursForm.session,
      status: concoursForm.status,
      period: concoursForm.period.trim() || "To be scheduled",
      track: concoursForm.track.trim() || "General track",
    };

    setConcoursItems((items) => [newConcours, ...items]);
    setSelectedConcoursId(newConcours.id);
    setConcoursForm(INITIAL_CONCOURS_FORM);
    setIsCreateConcoursOpen(false);
    setIsConcoursMenuOpen(false);
  };

  const NavLinks = ({ collapsed = false, onNavigate = () => {} }) => (
    <>
      {sidebarItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-all group relative",
              isActive
                ? "bg-[#8B7355]/5 text-[#8B7355] font-bold"
                : "text-[#6B6B6B] hover:bg-[#F9F9F9] hover:text-[#1A1A1A]",
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-nav"
                className="absolute left-0 w-1 h-5 bg-[#8B7355] rounded-r-full"
              />
            )}
            <item.icon
              size={18}
              className={cn(
                isActive
                  ? "text-[#8B7355]"
                  : "text-[#6B6B6B] group-hover:text-[#1A1A1A]",
              )}
            />
            {!collapsed && <span className="text-[13.5px]">{item.label}</span>}
            {collapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-[#1A1A1A] text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </Link>
        );
      })}
    </>
  );

  return (
    // Root: h-screen + overflow-hidden so nothing ever escapes the viewport
    <div className="h-screen overflow-hidden bg-bg flex">
      {/* ── Desktop Sidebar ── */}
      <aside
        className={cn(
          "hidden lg:flex flex-col bg-white border-r border-border transition-all duration-300 shrink-0 h-screen",
          isSidebarCollapsed ? "w-[80px]" : "w-[260px]",
        )}
      >
        <div className="p-6 flex items-center justify-between shrink-0">
          {!isSidebarCollapsed && (
            <Link
              to={ROUTES.DASHBOARD}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-[32px] h-[32px] bg-[#8B7355] rounded-full flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                <img
                  src={dashboardLogo}
                  alt="Logo"
                  className="w-10 h-10 rounded-xl"
                />
              </div>
              <span className="font-extrabold text-[15px] text-[#1A1A1A] tracking-tight">
                {APP_NAME}
              </span>
            </Link>
          )}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-1.5 hover:bg-black/[0.03] rounded-md text-muted"
          >
            {isSidebarCollapsed ? (
              <Menu size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-hidden">
          <NavLinks collapsed={isSidebarCollapsed} />
        </nav>

        <div className="p-4 border-t border-border shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full text-muted hover:text-red-500 hover:bg-red-50 rounded-md transition-all"
          >
            <LogOut size={18} />
            {!isSidebarCollapsed && (
              <span className="text-[13px]">Sign out</span>
            )}
          </button>
        </div>
      </aside>

      {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-[280px] h-full bg-white flex flex-col"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <div className="p-6 flex items-center justify-between border-b border-border shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-[32px] h-[32px] bg-[#8B7355] rounded-full flex items-center justify-center shrink-0">
                    <img
                      src={dashboardLogo}
                      alt="Logo"
                      className="w-8 h-8 rounded-lg"
                    />
                  </div>
                  <span className="font-bold text-xl text-[#8B7355]">
                    {APP_NAME}
                  </span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                <NavLinks onNavigate={() => setIsMobileMenuOpen(false)} />
              </nav>
              <div className="p-4 border-t border-border shrink-0">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center gap-3 px-4 py-3 w-full text-muted hover:text-red-500 rounded-md"
                >
                  <LogOut size={20} />
                  <span>Sign out</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

      {/* ── Main Content Area ── */}
      {/*
        KEY HEIGHT CHAIN:
        1. Root div          → h-screen overflow-hidden
        2. This div          → flex-1 flex flex-col min-w-0  (fills remaining width, column direction)
        3. header            → shrink-0                       (fixed height, never shrinks)
        4. main              → flex-1 min-h-0 overflow-hidden (takes ALL remaining height, clips overflow)
        5. main > div        → h-full flex flex-col gap-4     (gives children the full height to work with)
        6. Page outer div    → h-full flex flex-col gap-4     (just use h-full — NO inline calc needed)
      */}
      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        {/* Header — fixed height */}
        <header className="h-16 shrink-0 bg-white border-b border-border flex items-center justify-between px-4 lg:px-8 z-40">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 hover:bg-black/[0.03] rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-[17px] font-bold text-[#1A1A1A] leading-tight">
                {title}
              </h1>
              <p className="hidden sm:flex items-center gap-1.5 text-[11px] text-muted leading-tight mt-0.5">
                <Sparkles size={12} className="text-[#8B7355]" />
                <span>
                  {selectedConcours?.name ?? "Select a concours from the app bar"}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsConcoursMenuOpen((value) => !value)}
                className="flex items-center gap-3 rounded-xl border border-[#E7E1D7] bg-[#FAF8F5] px-3 py-2 text-left shadow-sm transition-all hover:border-[#8B7355]/40 hover:bg-white"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#8B7355] text-white shadow-sm">
                  <FileBadge size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[#9B9B9B]">
                    Active concours
                  </p>
                  <p className="max-w-[180px] truncate text-[12px] font-bold text-[#1A1A1A]">
                    {selectedConcours?.name ?? "No concours selected"}
                  </p>
                </div>
                <ChevronDown size={14} className="text-[#8B7355]" />
              </button>

              {isConcoursMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-[360px] overflow-hidden rounded-2xl border border-[#EBE6DF] bg-white shadow-[0_24px_70px_rgba(26,26,26,0.12)]">
                  <div className="flex items-center justify-between border-b border-[#F1ECE6] bg-[#FAF8F5] px-4 py-2.5">
                    <div>
                      <p className="text-[12px] font-bold text-[#1A1A1A]">
                        Concours list
                      </p>
                      <p className="text-[11px] text-[#9B9B9B]">
                        Static data in the app bar
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsCreateConcoursOpen(true);
                        setIsConcoursMenuOpen(false);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#8B7355] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm transition-colors hover:bg-[#7a6348]"
                    >
                      <Plus size={12} />
                      Add concours
                    </button>
                  </div>

                  <div className="max-h-[230px] overflow-y-auto p-1.5">
                    {concoursItems.map((concours) => {
                      const isActive = concours.id === selectedConcoursId;
                      return (
                        <button
                          key={concours.id}
                          onClick={() => handleSelectConcours(concours.id)}
                          className={cn(
                            "flex w-full items-start gap-2.5 rounded-xl px-3 py-2.5 text-left transition-all",
                            isActive
                              ? "bg-[#8B7355]/8 ring-1 ring-[#8B7355]/20"
                              : "hover:bg-[#FAF8F5]",
                          )}
                        >
                          <div
                            className={cn(
                              "mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-sm",
                              isActive ? "bg-[#8B7355]" : "bg-[#B49A79]",
                            )}
                          >
                            <Info size={15} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <p className="truncate text-[12.5px] font-bold text-[#1A1A1A]">
                                {concours.name}
                              </p>
                              <span className="shrink-0 rounded-full bg-[#F3EEE8] px-2 py-0.5 text-[9.5px] font-semibold text-[#8B7355]">
                                {concours.status}
                              </span>
                            </div>
                            <p className="mt-0.5 text-[10.5px] text-[#9B9B9B]">
                              {concours.code} · {concours.session}
                            </p>
                            <div className="mt-1.5 grid gap-0.5 text-[10.5px] text-[#6B6B6B]">
                              <span className="flex items-center gap-1.5">
                                <MapPin size={10} className="text-[#8B7355]" />
                                {concours.track}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Calendar size={10} className="text-[#8B7355]" />
                                {concours.period}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <BookOpen size={10} className="text-[#8B7355]" />
                                {concours.track}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsCreateConcoursOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#8B7355] px-4 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all hover:bg-[#7a6348]"
            >
              <Plus size={15} />
              Create concours
            </button>

            <div className="h-8 w-px bg-border mx-1" />

            <div className="flex items-center gap-2 p-1 rounded-md">
              <div className="w-8 h-8 rounded-full bg-[#F0EDE7] flex items-center justify-center text-[#8B7355] font-bold text-[11px] border border-[#8B7355]/10 shadow-sm">
                {initials}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-semibold leading-tight">
                  {fullName}
                </p>
                <p className="text-[10px] text-muted leading-tight">
                  {roleLabel}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main — takes all remaining height, clips overflow */}
        <main className="flex-1 min-h-0 overflow-hidden p-4 pb-2">
          <div className="h-full w-full overflow-hidden">{children}</div>
        </main>
      </div>

      {isCreateConcoursOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/45 backdrop-blur-[2px] flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setIsCreateConcoursOpen(false)}
        >
          <div
            className="flex max-h-[calc(100vh-2rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_30px_90px_rgba(26,26,26,0.22)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#F0ECE6] bg-gradient-to-r from-[#FBF8F4] to-white px-5 py-4.5">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#8B7355]/10 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#8B7355]">
                  <Sparkles size={12} />
                  New concours
                </div>
                <h2 className="mt-2.5 text-[20px] font-extrabold text-[#1A1A1A]">
                  Create concours profile
                </h2>
                <p className="mt-1 text-[12.5px] text-[#6B6B6B]">
                  Static fields for the app bar switcher and admin preview.
                </p>
              </div>
              <button
                onClick={() => setIsCreateConcoursOpen(false)}
                className="rounded-full p-2 text-[#9B9B9B] transition-colors hover:bg-[#F5F2EC] hover:text-[#1A1A1A]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid flex-1 min-h-0 gap-5 overflow-y-auto px-5 py-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.88fr)]">
              <div className="grid gap-3.5">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#4A4A4A]">
                      Concours name
                    </span>
                    <input
                      value={concoursForm.name}
                      onChange={(event) =>
                        setConcoursForm((form) => ({
                          ...form,
                          name: event.target.value,
                        }))
                      }
                      placeholder="Doctoral Concours - Renewable Energy"
                      className={fieldClassName}
                    />
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#4A4A4A]">
                      Concours code
                    </span>
                    <input
                      value={concoursForm.code}
                      onChange={(event) =>
                        setConcoursForm((form) => ({
                          ...form,
                          code: event.target.value,
                        }))
                      }
                      placeholder="CONC-2026-RE"
                      className={fieldClassName}
                    />
                  </label>
                </div>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="grid gap-1.5">
                    <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#4A4A4A]">
                      Session
                    </span>
                    <select
                      value={concoursForm.session}
                      onChange={(event) =>
                        setConcoursForm((form) => ({
                          ...form,
                          session: event.target.value,
                        }))
                      }
                      className={fieldClassName}
                    >
                      <option value="2025/2026">2025/2026</option>
                      <option value="2026/2027">2026/2027</option>
                    </select>
                  </label>
                  <label className="grid gap-1.5">
                    <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#4A4A4A]">
                      Status
                    </span>
                    <select
                      value={concoursForm.status}
                      onChange={(event) =>
                        setConcoursForm((form) => ({
                          ...form,
                          status: event.target.value,
                        }))
                      }
                      className={fieldClassName}
                    >
                      <option>Open</option>
                      <option>Preparation</option>
                      <option>Closed</option>
                      <option>Archived</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-1.5">
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#4A4A4A]">
                    Period
                  </span>
                  <input
                    value={concoursForm.period}
                    onChange={(event) =>
                      setConcoursForm((form) => ({
                        ...form,
                        period: event.target.value,
                      }))
                    }
                    placeholder="15 Jun - 09 Jul 2026"
                    className={fieldClassName}
                  />
                </label>

                <label className="grid gap-1.5">
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#4A4A4A]">
                    Track
                  </span>
                  <input
                    value={concoursForm.track}
                    onChange={(event) =>
                      setConcoursForm((form) => ({
                        ...form,
                        track: event.target.value,
                      }))
                    }
                    placeholder="Computer Science"
                    className={fieldClassName}
                  />
                </label>

                <label className="grid gap-1.5">
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#4A4A4A]">
                    Short description
                  </span>
                  <textarea
                    value={concoursForm.description}
                    onChange={(event) =>
                      setConcoursForm((form) => ({
                        ...form,
                        description: event.target.value,
                      }))
                    }
                    rows={4}
                    placeholder="Brief admin description for the concours card."
                    className={textareaClassName}
                  />
                </label>
              </div>

              <div className="flex flex-col justify-between rounded-[22px] border border-[#EDE5DB] bg-gradient-to-b from-[#FCFAF7] to-white p-4.5 shadow-[0_12px_28px_rgba(139,115,85,0.08)]">
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#8B7355]">
                    Preview
                  </p>
                  <div className="mt-3.5 rounded-[20px] border border-[#E9E2D8] bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-2.5">
                      <div>
                        <p className="text-[9.5px] uppercase tracking-[0.16em] text-[#9B9B9B]">
                          {concoursForm.session || "Session"}
                        </p>
                        <h3 className="mt-1 text-[17px] font-extrabold text-[#1A1A1A] leading-tight">
                          {concoursForm.name || "Concours name"}
                        </h3>
                        <p className="mt-1.5 text-[11.5px] text-[#6B6B6B]">
                          {concoursForm.description || "Your concours summary appears here."}
                        </p>
                      </div>
                      <span className="rounded-full bg-[#F3EEE8] px-2.5 py-1 text-[9.5px] font-bold text-[#8B7355]">
                        {concoursForm.status}
                      </span>
                    </div>

                    <div className="mt-3.5 space-y-1.75 text-[11.5px] text-[#555]">
                      <div className="flex items-center gap-2">
                        <Info size={12} className="text-[#8B7355]" />
                        <span>{concoursForm.code || "CONC-2026-XXX"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-[#8B7355]" />
                        <span>{concoursForm.period || "Period to be scheduled"}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen size={12} className="text-[#8B7355]" />
                        <span>{concoursForm.track || "Track"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-[#F9F6F1] p-3.5 text-[11.5px] text-[#6B6B6B]">
                  This concours is created locally for the header switcher and can be replaced with an API later.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 border-t border-[#F0ECE6] bg-[#FCFAF7] px-5 py-3.5">
              <button
                onClick={() => setIsCreateConcoursOpen(false)}
                className="rounded-xl border border-[#E1D8CC] bg-white px-4 py-2 text-[13px] font-semibold text-[#555] transition-colors hover:bg-[#FAFAFA]"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateConcours}
                className="inline-flex items-center gap-2 rounded-xl bg-[#8B7355] px-5 py-2 text-[13px] font-bold text-white shadow-sm transition-colors hover:bg-[#7a6348]"
              >
                <Plus size={14} />
                Save concours
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
