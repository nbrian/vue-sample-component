import Vue from 'vue';
import Component from 'vue-class-component';
import { CountriesComponent } from '../components/country-input/index';
import { NameComponent } from '../components/name/index';
import axios, { AxiosResponse } from 'axios';
require('../mock-services/mock.js');

@Component({
    template: require('./home.html'),
    components: {
        'name-input': NameComponent,
        'country-input': CountriesComponent
    },
})
export class HomeComponent extends Vue {
    user = '';

    protected axios;

    constructor() {
        super();
        this.axios = axios;
    }
    mounted() {
        console.log('mounted');
        this.getUsers();
    }

    getUsers() {
        console.log('getUsers');
        this.axios.get({
            url: '/user/list',
            method: 'post',
            data: JSON.stringify({ id: 1 })
        }).then(res => {
            this.user = res.data;
            console.log(this.user);
        }).catch(err => {
            // console.log(err)
        });
    }
}