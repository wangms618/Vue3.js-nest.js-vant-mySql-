import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn"; // import locale
dayjs.locale("zh-cn"); // use locale
dayjs.extend(relativeTime);
export function timefromNow(time: string): string {
    return dayjs(time).fromNow().replace(/\s/g, "");
}
export function timeFormatting(timer) {
    return dayjs(timer).format("MM/DD HH:mm");
}
