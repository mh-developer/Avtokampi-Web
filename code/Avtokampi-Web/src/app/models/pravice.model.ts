interface PraviceModel {
    id: number;
    naziv: string;
    opis: string;
}

export class Pravica implements PraviceModel {
    private _id: number;
    private _naziv: string;
    private _opis: string;

    get id(): number {
      return this._id;
    }

    set id(value: number) {
      this._id = value;
    }

    get naziv(): string {
      return this._naziv;
    }

    set naziv(value: string) {
      this._naziv = value;
    }

    get opis(): string {
      return this._opis;
    }

    set opis(value: string) {
      this._opis = value;
    }
}
