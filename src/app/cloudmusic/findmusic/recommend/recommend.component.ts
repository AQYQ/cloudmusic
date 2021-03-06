import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-recommend',
    templateUrl: './recommend.component.html',
    styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {
    selectedValue = null;
    listOfOption: Array<{ value: string; text: string }> = [];
    nzFilterOption = () => true;

    constructor(private httpClient: HttpClient) { }

    ngOnInit() {
    }
    search(value: string): void {
        this.httpClient
            .jsonp<{ result: Array<[string, string]> }>(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback')
            .subscribe(data => {
                const listOfOption: Array<{ value: string; text: string }> = [];
                data.result.forEach(item => {
                    listOfOption.push({
                        value: item[0],
                        text: item[0]
                    });
                });
                this.listOfOption = listOfOption;
            });
    }

    
}
