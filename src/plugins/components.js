import Container from '@/components/common/Container.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';

export const initGlobalComponents = (app) => {
    app.component('Container', Container);
    app.component('SectionHeader', SectionHeader);
}