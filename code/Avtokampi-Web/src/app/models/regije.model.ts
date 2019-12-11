interface RegijeModel {
    id: number;
    naziv: string;
    drzava: number;
}

export class Regija implements RegijeModel {
    private _id: number;
    private _naziv: string;
    private _drzava: number;

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

    get drzava(): number {
      return this._drzava;
    }

    set drzava(value: number) {
      this._drzava = value;
    }
}
