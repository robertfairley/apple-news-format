import {
    ComponentLayouts,
    Layout,
} from "./article-layout";
import { AutoPlacement } from "./auto-placement";
import { MemberComponent } from "./components/article-structure/container";
import { DocumentStyle } from "./document-style";
import { Metadata } from "./metadata";
import { ComponentStyles } from "./styles/component-styles";
import {
    ComponentTextStyles,
    TextStyles,
} from "./styles/text-styles";

/**
 * Signature/interface for the `ArticleDocument` object
 */
export interface ArticleDocument {
    components: MemberComponent[];
    componentTextStyles?: ComponentTextStyles;
    identifier: string;
    language: string;
    layout: Layout;
    title: string;
    version: string;
    autoPlacement?: AutoPlacement;
    componentLayouts?: ComponentLayouts;
    componentStyles?: ComponentStyles;
    documentStyle?: DocumentStyle;
    metadata?: Metadata;
    subtitle?: string;
    textStyles?: TextStyles;
}
