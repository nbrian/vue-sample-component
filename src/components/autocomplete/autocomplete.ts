import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'md-autocomplete',
    template: require('./autocomplete.html'),
    props: {
        id: String,
        placeholder: String,
        options: Array
    }
})
export class AutoCompleteComponent extends Vue {
    isOpen = false;
    highlightedPosition = 0;
    keyword = '';

    constructor() {
        super();
    }

    get fOptions() {
        const re = new RegExp(this.keyword, 'i');
        // console.log(re);
        // console.log(this.isOpen);
        return this.$props.options.filter(o => o.value.match(re));
    }
    get genId() {
        return this.$props.id ? this.$props.id : 'md-' + Math.random();
    }

    onInput(value) {
        console.log('onInput');
        this.highlightedPosition = 0;
        this.isOpen = !!value;
    }

    focus() {
        console.log('focus');
        this.onInput(this.keyword);
    }

    moveDown() {
        console.log('moveDown');
        if (!this.isOpen) {
            return;
        }
        this.highlightedPosition = (this.highlightedPosition + 1) % this.fOptions.length;
    }

    moveUp() {
        console.log('moveUp');
        if (!this.isOpen) {
            return;
        }
        this.highlightedPosition = this.highlightedPosition - 1 < 0 ? this.fOptions.length - 1 : this.highlightedPosition - 1;
    }

    select() {
        console.log('select');
        const selectedOption = this.fOptions[this.highlightedPosition];
        this.keyword = selectedOption.value;
        this.isOpen = false;
        this.$emit('select', selectedOption);
    }

}