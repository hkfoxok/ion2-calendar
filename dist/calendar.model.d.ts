/**
 * Created by hsuanlee on 2017/4/26.
 */
export interface CalendarOriginal {
    time: number;
    date: Date;
    year: number;
    month: number;
    firstWeek: number;
    howManyDays: number;
}
export interface CalendarDay {
    time: number;
    isToday: boolean;
    selected: boolean;
    disable: boolean;
    cssClass: string;
    title?: string;
    subTitle?: string;
    marked?: boolean;
    style?: {
        title?: string;
        subTitle?: string;
    };
}
export declare class CalendarMonth {
    original: CalendarOriginal;
    days: Array<CalendarDay | void>;
}
export declare class DayConfig {
    date: Date;
    marked?: boolean;
    disable?: boolean;
    title?: string;
    subTitle?: string;
}
export declare class CalendarOptions {
    start: number;
    isRadio: boolean;
    monthTitle: string;
    range_beg: number;
    range_end: number;
    daysConfig: Array<DayConfig>;
    disableWeekdays: Array<number>;
}
export interface ModalOptions {
    showBackdrop?: boolean;
    enableBackdropDismiss?: boolean;
    enterAnimation?: string;
    leaveAnimation?: string;
}
export interface CalendarControllerOptions {
    from?: Date;
    cssClass?: string;
    to?: Date | number;
    isRadio?: boolean;
    weekStartDay?: number;
    disableWeekdays?: Array<number>;
    weekdaysTitle?: Array<string>;
    closeLabel?: string;
    monthTitle?: string;
    canBackwardsSelected?: boolean;
    title?: string;
    defaultDate?: Date;
    daysConfig?: Array<{
        date: Date;
        cssClass?: string;
        marked?: boolean;
        title?: string;
        subTitle?: string;
    }>;
}
