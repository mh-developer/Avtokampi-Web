interface DrzaveModel {
    id: number;
    naziv: string;
}

export class Drzava implements DrzaveModel {
    private _id: number;
    private _naziv: string;

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
