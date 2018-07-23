import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'angular';
export interface ISpfxAngularWebPartProps {
    description: string;
}
export default class SpfxAngularWebPart extends BaseClientSideWebPart<ISpfxAngularWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
