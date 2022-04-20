import { Injectable } from "@angular/core";


@Injectable()
export class DataServise {

    private data: string[] = ['Learn angular', 'LearnC#', 'LearnGit', 'Go to gym', 'Make a breakfast'];

    getData(): string[] {

        return this.data;

    }

    addData(name: string) {

        this.data.push(name);

    }

    deleteData() {

        this.data.splice(this.data.length - 1, 1);
        
    }
}