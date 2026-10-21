export type LayerId =
  | 'foot-base'
  | 'torsion-stability'
  | 'core-cylinder'
  | 'upper-carriage'
  | 'mind-presence';

export interface KineticNode {
  id: string;
  name: string;
  cx: number;
  cy: number;
  layerId: LayerId;
  description: string;
}

export interface Dysfunction {
  name: string;
  symptom: string;
  rootCause: string;
  cascadeEffect: string;
}

export interface DiagnosticTest {
  id: string;
  title: string;
  timeEstimate: string;
  difficulty: 'Quick (1 min)' | 'Focused (3 min)' | 'Deep (5 min)';
  instructions: string[];
  passingCriteria: string;
  failingSignal: string;
  prescriptionIfFailed: string;
}

export interface Drill {
  name: string;
  target: string;
  frequency: string;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced';
  howTo: string[];
  cues: string[];
}

export interface CueVisualizer {
  movement: string;
  brokenCue: {
    title: string;
    description: string;
    consequences: string[];
  };
  lockedInCue: {
    title: string;
    description: string;
    mechanics: string[];
  };
}

export interface MentalTransmutation {
  physicalState: string;
  neurologicalImpact: string;
  confidenceShift: string;
}

export interface KineticLayer {
  id: LayerId;
  number: number;
  romanNumeral: string;
  title: string;
  subtitle: string;
  tagline: string;
  iconName: string;
  accentColor: string; // Tailwind hex or class
  anatomicalFocus: string[];
  firstPrinciple: string;
  kineticLink: string;
  dysfunctions: Dysfunction[];
  diagnostics: DiagnosticTest[];
  drills: Drill[];
  cueVisualizer: CueVisualizer;
  mentalTransmutation: MentalTransmutation;
}
