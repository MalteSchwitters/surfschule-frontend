import moment, {min} from 'moment';

export default class Formatters {

    formatTimelag(value: any): string {
        let remaining = value;
        const days = parseInt((remaining / (1000 * 60 * 60 * 24)).toFixed(0));
        remaining = remaining % (1000 * 60 * 60 * 24);
        const hours = parseInt((remaining / (1000 * 60 * 60)).toFixed(0));
        remaining = remaining % (1000 * 60 * 60);
        const minutes = parseInt((remaining / (1000 * 60)).toFixed(0));
        remaining = remaining % (1000 * 60);
        const seconds = parseInt((remaining / (1000)).toFixed(0));

        let result = days > 0 ? days + ' days ' : '';
        result += hours > 0 ? hours + ' hours ' : '';
        result += minutes > 0 ? minutes + ' minutes ' : '';
        result += seconds > 0 ? seconds + ' seconds ' : '';
        return result;
    }

    formatDate(value: any): string {
        return moment(value).format('LL');
    }

    format2digits(value: any): string {
        if (value === null || isNaN(value)) {
            return '0.00';
        }
        return (Math.round(value * 100) / 100).toFixed(2);
    }

    format2digitsCurrency(value: any): string {
        if (value === null || isNaN(value)) {
            return '₤0.00';
        }
        return `₤${(Math.round(value * 100) / 100).toFixed(2)}`;
    }

    format2digitsPercent(value: any): string {
        if (value === null || isNaN(value)) {
            return '0.00%';
        }
        return `${(Math.round(value * 100) / 100).toFixed(2)} %`;
    }

    formatLargeNumber(value: any): string {
        if (value === null || isNaN(value)) {
            return '0';
        }
        if (value > 1000) {
            return `${(value / 1000).toFixed(0)}k`;
        }
        return value;
    }
}