import {BaseItemType} from '@src/components/BaseItem';
import {Project} from '../projects/IProject';
export type Intern = BaseItemType & {
  description?: string;
  details: string[];
  projects?: Project[];
};
