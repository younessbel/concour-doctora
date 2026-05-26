import React from 'react';

const alertIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function AlertIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('path', { d: 'M12 8v5' }),
		React.createElement('path', { d: 'M12 16h.01' }),
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
	);
});

const barChartIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function BarChartIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('line', { x1: '5', x2: '5', y1: '20', y2: '12' }),
		React.createElement('line', { x1: '12', x2: '12', y1: '20', y2: '8' }),
		React.createElement('line', { x1: '19', x2: '19', y1: '20', y2: '4' }),
	);
});

const fileSignatureIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function FileSignatureIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
		React.createElement('path', { d: 'M14 2v6h6' }),
		React.createElement('path', { d: 'M10 12h4' }),
		React.createElement('path', { d: 'M10 16h4' }),
		React.createElement('path', { d: 'M14 12l5.5 5.5' }),
	);
});

const checkCircleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function CheckCircleIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('path', { d: 'm9 12 2 2 4-4' }),
	);
});

const filterIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function FilterIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('path', { d: 'M4 5h16' }),
		React.createElement('path', { d: 'M7 12h10' }),
		React.createElement('path', { d: 'M10 19h4' }),
	);
});

const homeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function HomeIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('path', { d: 'M3 10.5 12 3l9 7.5' }),
		React.createElement('path', { d: 'M5 9.5V21h14V9.5' }),
		React.createElement('path', { d: 'M9 21v-6h6v6' }),
	);
});

const loaderIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function LoaderIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('path', { d: 'M12 2v4' }),
		React.createElement('path', { d: 'm16.2 7.8 2.9-2.9' }),
		React.createElement('path', { d: 'M18 12h4' }),
		React.createElement('path', { d: 'm16.2 16.2 2.9 2.9' }),
		React.createElement('path', { d: 'M12 18v4' }),
		React.createElement('path', { d: 'm4.9 19.1 2.9-2.9' }),
		React.createElement('path', { d: 'M2 12h4' }),
		React.createElement('path', { d: 'm4.9 4.9 2.9 2.9' }),
	);
});

const unlockIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function UnlockIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('rect', { x: '3', y: '11', width: '18', height: '10', rx: '2' }),
		React.createElement('path', { d: 'M7 11V8a5 5 0 0 1 9.5-2' }),
		React.createElement('path', { d: 'M12 15v2' }),
	);
});

const xCircleIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function XCircleIcon(props, ref) {
	return React.createElement(
		'svg',
		{
			...props,
			ref,
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
		React.createElement('path', { d: 'm15 9-6 6' }),
		React.createElement('path', { d: 'm9 9 6 6' }),
	);
});

export const AlertCircle = alertIcon;
export const AlertTriangle = alertIcon;
export const BarChart2 = barChartIcon;
export const BarChart3 = barChartIcon;
export const FileSignature = fileSignatureIcon;
export const CheckCircle = checkCircleIcon;
export const CheckCircle2 = checkCircleIcon;
export const Filter = filterIcon;
export const Home = homeIcon;
export const Loader2 = loaderIcon;
export const Unlock = unlockIcon;
export const XCircle = xCircleIcon;
export { default as Archive } from '../../node_modules/lucide-react/dist/esm/icons/archive.js';
export { default as ArrowDownRight } from '../../node_modules/lucide-react/dist/esm/icons/arrow-down-right.js';
export { default as ArrowLeft } from '../../node_modules/lucide-react/dist/esm/icons/arrow-left.js';
export { default as ArrowRight } from '../../node_modules/lucide-react/dist/esm/icons/arrow-right.js';
export { default as ArrowUpDown } from '../../node_modules/lucide-react/dist/esm/icons/arrow-up-down.js';
export { default as ArrowUpRight } from '../../node_modules/lucide-react/dist/esm/icons/arrow-up-right.js';
export { default as Bell } from '../../node_modules/lucide-react/dist/esm/icons/bell.js';
export { default as AtSign } from '../../node_modules/lucide-react/dist/esm/icons/at-sign.js';
export { default as BookOpen } from '../../node_modules/lucide-react/dist/esm/icons/book-open.js';
export { default as Building2 } from '../../node_modules/lucide-react/dist/esm/icons/building-2.js';
export { default as Camera } from '../../node_modules/lucide-react/dist/esm/icons/camera.js';
export { default as Calendar } from '../../node_modules/lucide-react/dist/esm/icons/calendar.js';
export { default as Check } from '../../node_modules/lucide-react/dist/esm/icons/check.js';
export { default as ChevronDown } from '../../node_modules/lucide-react/dist/esm/icons/chevron-down.js';
export { default as ChevronLeft } from '../../node_modules/lucide-react/dist/esm/icons/chevron-left.js';
export { default as ChevronRight } from '../../node_modules/lucide-react/dist/esm/icons/chevron-right.js';
export { default as ChevronUp } from '../../node_modules/lucide-react/dist/esm/icons/chevron-up.js';
export { default as ClipboardCheck } from '../../node_modules/lucide-react/dist/esm/icons/clipboard-check.js';
export { default as ClipboardList } from '../../node_modules/lucide-react/dist/esm/icons/clipboard-list.js';
export { default as Clock } from '../../node_modules/lucide-react/dist/esm/icons/clock.js';
export { default as Download } from '../../node_modules/lucide-react/dist/esm/icons/download.js';
export { default as Edit2 } from '../../node_modules/lucide-react/dist/esm/icons/edit-2.js';
export { default as Eye } from '../../node_modules/lucide-react/dist/esm/icons/eye.js';
export { default as EyeOff } from '../../node_modules/lucide-react/dist/esm/icons/eye-off.js';
export { default as FileBadge } from '../../node_modules/lucide-react/dist/esm/icons/file-badge.js';
export { default as FileCheck } from '../../node_modules/lucide-react/dist/esm/icons/file-check.js';
export { default as FileSpreadsheet } from '../../node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js';
export { default as FileText } from '../../node_modules/lucide-react/dist/esm/icons/file-text.js';
export { default as FileX } from '../../node_modules/lucide-react/dist/esm/icons/file-x.js';
export { default as Flag } from '../../node_modules/lucide-react/dist/esm/icons/flag.js';
export { default as Gavel } from '../../node_modules/lucide-react/dist/esm/icons/gavel.js';
export { default as Globe } from '../../node_modules/lucide-react/dist/esm/icons/globe.js';
export { default as Hash } from '../../node_modules/lucide-react/dist/esm/icons/hash.js';
export { default as History } from '../../node_modules/lucide-react/dist/esm/icons/history.js';
export { default as Inbox } from '../../node_modules/lucide-react/dist/esm/icons/inbox.js';
export { default as Info } from '../../node_modules/lucide-react/dist/esm/icons/info.js';
export { default as KeyRound } from '../../node_modules/lucide-react/dist/esm/icons/key-round.js';
export { default as LayoutDashboard } from '../../node_modules/lucide-react/dist/esm/icons/layout-dashboard.js';
export { default as Lightbulb } from '../../node_modules/lucide-react/dist/esm/icons/lightbulb.js';
export { default as Link2 } from '../../node_modules/lucide-react/dist/esm/icons/link-2.js';
export { default as Lock } from '../../node_modules/lucide-react/dist/esm/icons/lock.js';
export { default as LogIn } from '../../node_modules/lucide-react/dist/esm/icons/log-in.js';
export { default as LogOut } from '../../node_modules/lucide-react/dist/esm/icons/log-out.js';
export { default as Mail } from '../../node_modules/lucide-react/dist/esm/icons/mail.js';
export { default as MapPin } from '../../node_modules/lucide-react/dist/esm/icons/map-pin.js';
export { default as Maximize2 } from '../../node_modules/lucide-react/dist/esm/icons/maximize-2.js';
export { default as Medal } from '../../node_modules/lucide-react/dist/esm/icons/medal.js';
export { default as Menu } from '../../node_modules/lucide-react/dist/esm/icons/menu.js';
export { default as Pen } from '../../node_modules/lucide-react/dist/esm/icons/pen.js';
export { default as PenLine } from '../../node_modules/lucide-react/dist/esm/icons/pen-line.js';
export { default as Plus } from '../../node_modules/lucide-react/dist/esm/icons/plus.js';
export { default as Printer } from '../../node_modules/lucide-react/dist/esm/icons/printer.js';
export { default as QrCode } from '../../node_modules/lucide-react/dist/esm/icons/qr-code.js';
export { default as RefreshCw } from '../../node_modules/lucide-react/dist/esm/icons/refresh-cw.js';
export { default as RotateCcw } from '../../node_modules/lucide-react/dist/esm/icons/rotate-ccw.js';
export { default as Save } from '../../node_modules/lucide-react/dist/esm/icons/save.js';
export { default as ScanLine } from '../../node_modules/lucide-react/dist/esm/icons/scan-line.js';
export { default as Search } from '../../node_modules/lucide-react/dist/esm/icons/search.js';
export { default as Settings } from '../../node_modules/lucide-react/dist/esm/icons/settings.js';
export { default as Shield } from '../../node_modules/lucide-react/dist/esm/icons/shield.js';
export { default as ShieldAlert } from '../../node_modules/lucide-react/dist/esm/icons/shield-alert.js';
export { default as ShieldCheck } from '../../node_modules/lucide-react/dist/esm/icons/shield-check.js';
export { default as Shuffle } from '../../node_modules/lucide-react/dist/esm/icons/shuffle.js';
export { default as Sparkles } from '../../node_modules/lucide-react/dist/esm/icons/sparkles.js';
export { default as Square } from '../../node_modules/lucide-react/dist/esm/icons/square.js';
export { default as Timer } from '../../node_modules/lucide-react/dist/esm/icons/timer.js';
export { default as Trash2 } from '../../node_modules/lucide-react/dist/esm/icons/trash-2.js';
export { default as TrendingUp } from '../../node_modules/lucide-react/dist/esm/icons/trending-up.js';
export { default as Trophy } from '../../node_modules/lucide-react/dist/esm/icons/trophy.js';
export { default as Undo2 } from '../../node_modules/lucide-react/dist/esm/icons/undo-2.js';
export { default as Unlink2 } from '../../node_modules/lucide-react/dist/esm/icons/unlink-2.js';
export { default as Upload } from '../../node_modules/lucide-react/dist/esm/icons/upload.js';
export { default as User } from '../../node_modules/lucide-react/dist/esm/icons/user.js';
export { default as UserPlus } from '../../node_modules/lucide-react/dist/esm/icons/user-plus.js';
export { default as UserX } from '../../node_modules/lucide-react/dist/esm/icons/user-x.js';
export { default as Users } from '../../node_modules/lucide-react/dist/esm/icons/users.js';
export { default as Phone } from '../../node_modules/lucide-react/dist/esm/icons/phone.js';
export { default as Wifi } from '../../node_modules/lucide-react/dist/esm/icons/wifi.js';
export { default as WifiOff } from '../../node_modules/lucide-react/dist/esm/icons/wifi-off.js';
export { default as X } from '../../node_modules/lucide-react/dist/esm/icons/x.js';
export { default as ZoomIn } from '../../node_modules/lucide-react/dist/esm/icons/zoom-in.js';
export { default as ZoomOut } from '../../node_modules/lucide-react/dist/esm/icons/zoom-out.js';