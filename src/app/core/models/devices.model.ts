export interface Devices {
  device: Device[];
  meta: Meta;
}

export interface Device {
  id: string;
  short_id: string;
  hostname: string;
  description: string;
  state: string;
  tags: any[];
  image_url?: any;
  billing_cycle: string;
  user: string;
  iqn: string;
  locked: boolean;
  bonding_mode: number;
  created_at: Date;
  updated_at: Date;
  ipxe_script_url?: any;
  always_pxe: boolean;
  storage?: any;
  customdata: Customdata;
  operating_system: OperatingSystem;
  facility: Facility;
  project: Project;
  ssh_keys: SshKey[];
  project_lite: ProjectLite;
  volumes: any[];
  ip_addresses: IpAddress[];
  plan: Plan;
  userdata: string;
  switch_uuid: string;
  network_ports: NetworkPort[];
  href: string;
}

export interface Customdata {
}

export interface Hour {
  price: number;
  multiplier: string;
}

export interface Pricing {
  hour: Hour;
}

export interface OperatingSystem {
  id: string;
  slug: string;
  name: string;
  distro: string;
  version: string;
  provisionable_on: string[];
  preinstallable: boolean;
  pricing: Pricing;
  licensed: boolean;
}

export interface Address {
  href: string;
}

export interface Facility {
  id: string;
  name: string;
  code: string;
  features: string[];
  address: Address;
  ip_ranges: any[];
}

export interface Project {
  href: string;
}

export interface SshKey {
  href: string;
}

export interface ProjectLite {
  href: string;
}

export interface Customdata2 {
}

export interface Project2 {
}

export interface ProjectLite2 {
}

export interface Address2 {
  href: string;
}

export interface Facility2 {
  id: string;
  name: string;
  code: string;
  features: string[];
  address: Address2;
  ip_ranges: any[];
}

export interface AssignedTo {
  href: string;
}

export interface Interface {
  href: string;
}

export interface IpAddress {
  id: string;
  address_family: number;
  netmask: string;
  created_at: Date;
  details?: any;
  public: boolean;
  cidr: number;
  management: boolean;
  manageable: boolean;
  enabled: boolean;
  global_ip?: any;
  customdata: Customdata2;
  project: Project2;
  project_lite: ProjectLite2;
  facility: Facility2;
  assigned_to: AssignedTo;
  interface: Interface;
  network: string;
  address: string;
  gateway: string;
  href: string;
}

export interface Cpu {
  count: number;
  type: string;
}

export interface Memory {
  total: string;
}

export interface Drive {
  count: number;
  size: string;
  type: string;
}

export interface Nic {
  count: number;
  type: string;
}

export interface Features {
}

export interface Specs {
  cpus: Cpu[];
  memory: Memory;
  drives: Drive[];
  nics: Nic[];
  features: Features;
}

export interface AvailableIn {
  href: string;
}

export interface Pricing2 {
  hour: number;
}

export interface Plan {
  id: string;
  slug: string;
  name: string;
  description: string;
  line: string;
  specs: Specs;
  legacy: boolean;
  deployment_types: string[];
  available_in: AvailableIn[];
  class: string;
  pricing: Pricing2;
}

export interface Data {
  bonded: boolean;
  mac: string;
  ae_port: string;
}

export interface Hardware {
  href: string;
}

export interface ConnectedPort {
  href: string;
}

export interface Bond {
  id: string;
  name: string;
}

export interface NetworkPort {
  id: string;
  type: string;
  name: string;
  data: Data;
  network_type: string;
  native_virtual_network?: any;
  hardware: Hardware;
  virtual_networks: any[];
  connected_port: ConnectedPort;
  href: string;
  bond: Bond;
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
