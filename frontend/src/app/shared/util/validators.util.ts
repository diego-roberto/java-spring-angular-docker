import { FormControl } from '@angular/forms';

export class UtilValidators {

    static cnpj(control: FormControl) {
        let cnpj: string = String(control.value);
        const invalid = { cnpj: true };

        if (control.value === '') {
            return invalid;
        }

        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj === '') {
            return invalid;
        }

        if (cnpj.length !== 14) { return invalid; }

        // if (cnpj.match('^(0+|1+|2+|3+|4+|5+|6+|7+|8+|9+)$')) { return invalid; }

        let length = cnpj.length - 2;
        let nums = cnpj.substring(0, length);
        const digits = cnpj.substring(length);
        let sum = 0;
        let pos = length - 7;
        for (let i = length; i >= 1; i--) {
            sum += Number(nums.charAt(length - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result !== Number(digits.charAt(0))) {
            return invalid;
        }

        length = length + 1;
        nums = cnpj.substring(0, length);
        sum = 0;
        pos = length - 7;
        for (let i = length; i >= 1; i--) {
            sum += Number(nums.charAt(length - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;

        return (result !== Number(digits.charAt(1))) ? invalid : null;
    }

    static onlytext(control: FormControl) {
        const regEx = /^[A-Za-záàâãäÁÀÂÃÄçÇéèêëÉÈÊËíìîïÍÌÎÏóòôõöÓÒÔÕÖúùûüÚÙÛÜ\s]+$/;
        if (!control.value) {
            return null;
        }

        return !regEx.test(control.value) ? { onlytext: true } : null;
    }

    static onlynumber(control: FormControl) {
        const regEx = /^[0-9]+$/;
        if (!control.value) {
          return null;
        }
      
        return !regEx.test(control.value) ? { onlynumber: true } : null;
      }

    static textAnNumber(control: FormControl) {
        const regEx = /^[a-zA-Z0-9áàâãäÁÀÂÃÄçÇéèêëÉÈÊËíìîïÍÌÎÏóòôõöÓÒÔÕÖúùûüÚÙÛÜ\s]+$/;
        if (!control.value) {
            return null;
        }

        return !regEx.test(control.value) ? { textAnNumber: true } : null;
    }

    static onlytextAndSeparator(control: FormControl) {
        const regEx = /^[A-Za-záàâãäÁÀÂÃÄçÇéèêëÉÈÊËíìîïÍÌÎÏóòôõöÓÒÔÕÖúùûüÚÙÛÜ,;\s ]+$/;
        if (!control.value) {
            return null;
        }

        return !regEx.test(control.value) ? { onlytext: true } : null;
    }

}
