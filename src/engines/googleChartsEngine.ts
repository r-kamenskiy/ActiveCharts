import { IChartsEngine } from './iChartsEngine'; 
import { Dvm } from "../models/dvm";

export class GoogleChartEngine implements IChartsEngine {
    render(dvm:Dvm) : string {
        return "1";
    }
}