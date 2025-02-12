import type { TablerIconComponent } from "vue-tabler-icons";
//Footer menu
type ConferenceFooterMenu = {
    title: string;
    url: string;
    tag:boolean;
};

//Social Links
type ConferenceSocialLinks = {
    icon: TablerIconComponent;
    url:string;
}
export type { ConferenceFooterMenu,ConferenceSocialLinks};