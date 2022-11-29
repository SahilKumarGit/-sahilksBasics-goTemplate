export type tempOptions = {
    startWith: string,
    endWith: string,
}

const options: tempOptions = {
    startWith: '{{',
    endWith: '}}'
}

class Temp {
    getFrom(
        tempStructure: string,
        variables: { [key: string]: string },
        options: tempOptions = {
            startWith: '{{',
            endWith: '}}'
        }): string {

        /* Code Start Here... */

        /* generate ReGex */
        const ReGex = new RegExp(`${options.startWith}([^}]+)${options.endWith}`, `g`);

        /* replacer is here */
        const _data = tempStructure.replace(ReGex, (_tempKey: string, _key: string, _index: string): any => variables[_key]);
        return _data;
    }
}


export const Template = new Temp();