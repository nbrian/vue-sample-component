import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'name-input',
    template: require('./name.html'),
    props: {
        placeholder: String
    }
})
export class NameComponent extends Vue {

}
