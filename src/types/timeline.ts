export type TimelineItemType = 'education' | 'venture' | 'project' | 'pending';

export interface TimelineItem {
  id: string;
  type: TimelineItemType;
  title: string;
  subtitle: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  isVerified: boolean;
  statusTag?: string;
}
