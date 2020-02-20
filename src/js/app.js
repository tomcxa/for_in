/* eslint-disable no-prototype-builtins */
/* eslint-disable import/prefer-default-export */
// TODO: write your code here
export default function orderByProps(obj = {}, sortArr = []) {
    // сортируем по алфавиту
    const sortByDefault = () => {
        const result = [];
        const copyObj = { ...obj };
        for (const el of sortArr) {
            delete copyObj[el];
        }
        for (const key in copyObj) {
            if (copyObj.hasOwnProperty(key)) {
                const value = copyObj[key];
                const newObj = {};
                newObj.key = key;
                newObj.value = value;
                result.push(newObj);
            }
        }
        result.sort((prev, next) => {
            if (prev.key < next.key) {
                return -1;
            }
            if (prev.key > next.key) {
                return 1;
            }
            return 0;
        });

        return result;
    };
    // сортируем по массиву
    const sortBySet = () => {
        const result = [];
        const copyObj = {};
        for (const el of sortArr) {
            if (el in obj) {
                copyObj[el] = obj[el];
            }
        }
        for (const key in copyObj) {
            if (copyObj.hasOwnProperty(key)) {
                const value = copyObj[key];
                const newObj = {};
                newObj.key = key;
                newObj.value = value;
                result.push(newObj);
            }
        }

        return result;
    };

    const sortable = [...sortBySet(), ...sortByDefault()];
    return sortable;
}
