import { Dvm } from "../models/dvm";

export interface IChartsEngine
{
    render(dvm:Dvm) : string
}