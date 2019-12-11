interface KategorijeModel {
    id: number;
    naziv: string;
    created_at: Date;
    updated_at: Date;
}

export class Kategorija implements KategorijeModel {

    private _id: number;
    private _naziv: string;
    private _created_at: Date;
    private _updated_at: Date;

  get created_at(): Date {
    return this._created_at;
  }

  set created_at(value: Date) {
    this._created_at = value;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  set updated_at(value: Date) {
    this._updated_at = value;
  }

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
}
