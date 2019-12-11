interface StoritveModel {
    id: number;
    naziv: string;
    kategorija_storitve: number;
    cenik: number;
}

export class Storitev implements StoritveModel {
    private _id: number;
    private _naziv: string;
    private _kategorija_storitve: number;
    private _cenik: number;

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

    get kategorija_storitve(): number {
      return this._kategorija_storitve;
    }

    set kategorija_storitve(value: number) {
      this._kategorija_storitve = value;
    }

    get cenik(): number {
      return this._cenik;
    }

    set cenik(value: number) {
      this._cenik = value;
    }
}
