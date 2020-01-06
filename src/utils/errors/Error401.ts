export interface Error401Props {
    message: string
}

export class Error401 extends Error {
    constructor(props: Error401Props) {
        super(props.message);
    }

}