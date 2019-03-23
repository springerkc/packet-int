export interface Projects {
  projects: Project[];
  meta: Meta;
}

export interface Customdata {
}

export interface Membership {
  href: string;
}

export interface Device {
  href: string;
}

export interface SshKey {
  href: string;
}

export interface Member {
  href: string;
}

export interface Organization {
  href: string;
}

export interface Project {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
  backend_transfer_enabled: boolean;
  customdata: Customdata;
  event_alert_configuration?: any;
  memberships: Membership[];
  invitations: any[];
  devices: Device[];
  ssh_keys: SshKey[];
  volumes: any[];
  members: Member[];
  transfers: any[];
  organization: Organization;
  href: string;
}

export interface First {
  href: string;
}

export interface Self {
  href: string;
}

export interface Last {
  href: string;
}

export interface Meta {
  first: First;
  previous?: any;
  self: Self;
  next?: any;
  last: Last;
  current_page: number;
  last_page: number;
  total: number;
}
