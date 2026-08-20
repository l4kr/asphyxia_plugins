export interface MusicRecord {
  collection: 'music';

  version: number;
  dbver: number;

  mid: number;
  type: number;
  score: number;
  exscore: number;
  volforce: number;
  clear: number;
  grade: number;
  buttonRate: number;
  longRate: number;
  volRate: number;
  playCount: number;

  maxChain: number;
  critical: number;
  s_critical?: number;
  criticalEarly?: number;
  criticalLate?: number;
  near: number;
  error: number;
  early?: number;
  late?: number;
  lastClear?: number;
  lastGrade?: number;
  effectiveRate: number;
  mode: number;
  gaugeType: number;

  updatedAt?: number;
}
