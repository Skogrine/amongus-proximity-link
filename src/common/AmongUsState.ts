import { CameraLocation, MapType } from "./AmongUsMap";
import { ModsType } from "./Mods";

export interface AmongUsState {
  gameState: GameState;
  oldGameState: GameState;
  lobbyCodeInt: number;
  lobbyCode: string;
  players: Player[];
  isHost: boolean;
  clientId: number;
  hostId: number;
  comsSabotaged: boolean;
  currentCamera: CameraLocation;
  map: MapType;
  lightRadius: number;
  lightRadiusChanged: boolean;
  closedDoors: number[];
  currentServer: string;
  maxPlayers: number;
  mod: ModsType;
  oldMeetingHud: boolean;
}

export interface Player {
  ptr: number;
  id: number;
  clientId: number;
  name: string;
  nameHash: number;
  colorId: number;
  hatId: string;
  petId: number;
  skinId: number;
  visorId: string;
  disconnect: boolean;
  isImpostor: boolean;
  isDead: boolean;
  taskPtr: number;
  objectPtr: number;
  isLocal: boolean;
  shiftedColor: number;
  bugged: boolean;
  x: number;
  y: number;
  inVent: boolean;
  isDummy: boolean;
}

export enum GameState {
  LOBBY,
  TASKS,
  DISCUSSION,
  MENU,
  UNKNOWN,
}

export interface Client {
  playerId: number;
  clientId: number;
}

export interface SocketClientMap {
  [socketId: number]: Client;
}

export interface ClientBoolMap {
  [clientId: number]: boolean;
}

export interface AudioConnected {
  [peer: string]: boolean;
}

export interface numberStringMap {
  [index: number]: string;
}

export interface VoiceState {
  otherTalking: ClientBoolMap;
  playerSocketIds: numberStringMap;
  otherDead: ClientBoolMap;
  socketClient: SocketClientMap;
  audioConnected: AudioConnected;
  impostorRadioClientId: number;
  localTalking: boolean;
  localIsAlive: boolean;
  muted: boolean;
  deafened: boolean;
  mod: ModsType;
}
