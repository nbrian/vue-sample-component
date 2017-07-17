import Vue from 'vue';
import Component from 'vue-class-component';
import axios, { AxiosResponse } from 'axios';
import { AutoCompleteComponent } from '../autocomplete/index';

interface Countries {
    id: string;
    name: string;
}

@Component({
    name: 'country',
    components: {
        'md-autocomplete': AutoCompleteComponent
    },  
    template: require('./country-input.html')
})
export class CountriesComponent extends Vue {
    
    countries = [];
    private url = 'https://restcountries.eu/rest/v2/all';
    protected axios;

    constructor() {
        super();
        this.axios = axios;
    }

    mounted() {
        this.loadItems();
    }

    private loadItems() {
        this.axios.get(this.url).then((response: AxiosResponse) => {
            for (let i = 0; i < response.data.length; i++) {
                let country = response.data[i];
                this.countries.push({ key: country.alpha2Code, value: country.name, img: country.flag });
            }
        }, (error) => {
            console.error(error);
        });
    }

    onOptionSelect(option) {
        alert('Selected country:' + option.value);
    }
}
