import { KineticLayer, KineticNode } from '@/types/kinetic';

export const KINETIC_NODES: KineticNode[] = [
  // Layer 1: Foot & Base
  { id: 'l-foot-tripod', name: 'Left Foot Tripod', cx: 160, cy: 740, layerId: 'foot-base', description: 'Calcaneus, 1st & 5th MTP ground anchors' },
  { id: 'r-foot-tripod', name: 'Right Foot Tripod', cx: 240, cy: 740, layerId: 'foot-base', description: 'Calcaneus, 1st & 5th MTP ground anchors' },
  { id: 'l-ankle', name: 'Left Talocrural Joint', cx: 165, cy: 690, layerId: 'foot-base', description: 'Sagittal dorsiflexion hinge' },
  { id: 'r-ankle', name: 'Right Talocrural Joint', cx: 235, cy: 690, layerId: 'foot-base', description: 'Sagittal dorsiflexion hinge' },

  // Layer 2: Torsion & Stability
  { id: 'l-tibia', name: 'Left Tibial Axis', cx: 170, cy: 600, layerId: 'torsion-stability', description: 'External rotational spiral' },
  { id: 'r-tibia', name: 'Right Tibial Axis', cx: 230, cy: 600, layerId: 'torsion-stability', description: 'External rotational spiral' },
  { id: 'l-knee', name: 'Left Knee Joint', cx: 175, cy: 520, layerId: 'torsion-stability', description: 'Patellofemoral tracking hinge' },
  { id: 'r-knee', name: 'Right Knee Joint', cx: 225, cy: 520, layerId: 'torsion-stability', description: 'Patellofemoral tracking hinge' },
  { id: 'l-hip', name: 'Left Femoral Acetabulum', cx: 180, cy: 430, layerId: 'torsion-stability', description: 'Glute medius & external rotators' },
  { id: 'r-hip', name: 'Right Femoral Acetabulum', cx: 220, cy: 430, layerId: 'torsion-stability', description: 'Glute medius & external rotators' },

  // Layer 3: The Core & Cylinder
  { id: 'pelvic-bowl', name: 'Pelvic Bowl (SI Joints)', cx: 200, cy: 410, layerId: 'core-cylinder', description: 'Neutral pelvic floor & sacral base' },
  { id: 'lumbar-cylinder', name: 'Intra-Abdominal Cylinder', cx: 200, cy: 350, layerId: 'core-cylinder', description: 'Transverse abdominis & 360° IAP brace' },
  { id: 'diaphragm-dome', name: 'Respiratory Diaphragm', cx: 200, cy: 300, layerId: 'core-cylinder', description: 'Phrenic motor pump & vagal hub' },
  { id: 'thoracic-stack', name: 'Thoracolumbar Junction', cx: 200, cy: 260, layerId: 'core-cylinder', description: 'Stacked ribcage over pelvis' },

  // Layer 4: Upper Carriage
  { id: 'l-scapula', name: 'Left Scapulothoracic Joint', cx: 165, cy: 220, layerId: 'upper-carriage', description: 'Serratus anterior & lower trap anchor' },
  { id: 'r-scapula', name: 'Right Scapulothoracic Joint', cx: 235, cy: 220, layerId: 'upper-carriage', description: 'Serratus anterior & lower trap anchor' },
  { id: 't-spine', name: 'Thoracic Extension Pivot', cx: 200, cy: 200, layerId: 'upper-carriage', description: '12-vertebra rotational & extension cage' },
  { id: 'c-spine', name: 'Cervical Retraction Axis', cx: 200, cy: 140, layerId: 'upper-carriage', description: 'Deep neck flexor carriage' },

  // Layer 5: Mind & Presence
  { id: 'vestibular-crown', name: 'Vestibular & Somatic Crown', cx: 200, cy: 80, layerId: 'mind-presence', description: 'Horizontal gaze & proprioceptive awareness' },
  { id: 'vagal-outflow', name: 'Vagal Downregulation Hub', cx: 200, cy: 110, layerId: 'mind-presence', description: 'Parasympathetic autonomic brake' }
];

export const KINETIC_LAYERS: KineticLayer[] = [
  {
    id: 'foot-base',
    number: 1,
    romanNumeral: '01',
    title: 'Ground Contact & Base',
    subtitle: 'The Foot Tripod, Ankle Hinge & Plantar Spring',
    tagline: 'You cannot fire a cannon from a canoe. The entire kinetic chain inherits the geometry of your ground contact.',
    iconName: 'Footprints',
    accentColor: '#10b981', // Emerald
    anatomicalFocus: [
      'The Foot Tripod (Calcaneus, 1st MTP, 5th MTP)',
      'Hallux (Big Toe) 65° Extension',
      'Talocrural Dorsiflexion (Tibialis Anterior)',
      'Plantar Windlass Mechanism'
    ],
    firstPrinciple:
      'The human foot contains 26 bones, 33 joints, and over 100 muscles, tendons, and ligaments. Modern footwear turns this sensory-rich, dynamic spring into an immobilized block. When the foot collapses into passive pronation, the body loses its mechanical baseline: torque cannot be generated, the tibia collapses inward, and every joint upstream pays the debt.',
    kineticLink:
      'A 5-degree deficit in ankle dorsiflexion forces the knee into valgus collapse during squats and walking, causing compensatory anterior pelvic tilt and lumbar hyperextension.',
    dysfunctions: [
      {
        name: 'Collapsed Medial Arch (Over-Pronation)',
        symptom: 'Inner ankle rolls inward; shoe wears out heavily on the medial edge; knee aches after 5km runs.',
        rootCause: 'Weak intrinsic foot muscles (abductor hallucis) from narrow, rigid, elevated-heel modern shoes.',
        cascadeEffect: 'Tibial internal rotation → patellofemoral tracking breakdown → adductor dominance and glute amnesia.'
      },
      {
        name: 'Restricted Ankle Dorsiflexion (< 10cm Wall Test)',
        symptom: 'Heels lift off the ground when squatting below parallel; chest caves forward to prevent tipping backward.',
        rootCause: 'Shortened soleus/gastrocnemius and anterior ankle capsule impingement from sedentary seated posture.',
        cascadeEffect: 'Forces lumbar spine into excessive flexion or extension under load, blowing out lumbar discs.'
      },
      {
        name: 'Immobilized Hallux (Big Toe Rigidity)',
        symptom: 'Walking with feet turned outwards like a duck (external rotation gait) to skip pushing off the big toe.',
        rootCause: 'Tapered shoe toe-boxes cramping the hallux laterally (hallux valgus).',
        cascadeEffect: 'Destroys the Windlass mechanism; gluteus maximus cannot achieve terminal extension during propulsion.'
      }
    ],
    diagnostics: [
      {
        id: 'wall-ankle-test',
        title: 'The Knee-to-Wall Ankle Mobility Test',
        timeEstimate: '2 minutes',
        difficulty: 'Quick (1 min)',
        instructions: [
          'Stand barefoot facing a flat wall.',
          'Place your big toe 10 cm (about 4 fingers width) away from the baseboard.',
          'Drive your knee straight forward toward the wall over your 2nd toe, keeping your heel firmly glued to the floor.',
          'Assess whether your knee can touch the wall without the heel lifting or the arch caving inward.'
        ],
        passingCriteria: 'Knee cleanly touches the wall with heel completely flat on floor and arch intact at 10cm distance.',
        failingSignal: 'Heel peels off the ground, knee travels inward (pronation cheat), or pinch sensation in the front of the ankle.',
        prescriptionIfFailed: 'Banded ankle joint mobilizations + deficit eccentric calf raises with 3-second loaded stretch.'
      },
      {
        id: 'hallux-windlass-test',
        title: 'The Great Toe Extension & Splay Screen',
        timeEstimate: '1 minute',
        difficulty: 'Quick (1 min)',
        instructions: [
          'Stand barefoot with feet shoulder-width apart, weight evenly distributed.',
          'Try to lift ONLY your big toes off the floor while keeping the other 4 toes pinned down.',
          'Then, plant the big toes and lift ONLY the outer 4 toes.',
          'Finally, spread all 10 toes as wide as the fingers on your hand.'
        ],
        passingCriteria: 'Independent motor control: can elevate hallux 30°+ while 4 toes remain flat, with visible toe splay.',
        failingSignal: 'Whole foot shakes, toes move as a glued unit, or arch involuntarily flattens.',
        prescriptionIfFailed: 'Daily barefoot toe yoga (toe lifts, towel scrunches) and switching to anatomical wide-toe-box footwear.'
      }
    ],
    drills: [
      {
        name: 'The "Short Foot" Arch Activation',
        target: 'Intrinsic foot musculature (Abductor Hallucis, Flexor Hallucis Brevis)',
        frequency: 'Daily: 3 sets of 10 contractions per foot',
        difficulty: 'Foundational',
        howTo: [
          'Sit or stand barefoot with weight balanced evenly.',
          'Pin the heel, the base of the big toe, and the base of the pinky toe firmly into the ground (the Tripod).',
          'Without curling your toes into claws, actively draw the ball of the foot toward the heel, creating a high, active arch.',
          'Hold the peak contraction for 5 seconds, feeling the underside of your foot ignite.'
        ],
        cues: ['Grip with the arch, not the claws', 'Suction cup beneath the midfoot', 'Shorten the distance between heel and ball']
      },
      {
        name: 'Banded Talocrural Joint Distraction',
        target: 'Ankle joint capsule and talus posterior glide',
        frequency: 'Pre-workout: 2 minutes per side',
        difficulty: 'Intermediate',
        howTo: [
          'Anchor a heavy resistance band low to a post.',
          'Loop the band right over the talus bone (below the malleoli ankles, not on the shin).',
          'Step forward into a lunge to create heavy tension pulling backward.',
          'Drive the knee forward over the toes in pulses while maintaining the tripod.'
        ],
        cues: ['Band pulls the ankle bone back as the knee travels forward', 'Keep the heel locked down']
      }
    ],
    cueVisualizer: {
      movement: 'Squat Ground Contact',
      brokenCue: {
        title: '"Push through your heels"',
        description: 'Over-relying on the heel unweights the front of the foot, turning off the big toe and destabilizing the tibia.',
        consequences: ['Loss of balance backward', 'Shutting off calf and hamstring spring tension', 'Knee hyperextension stress']
      },
      lockedInCue: {
        title: '"Screw the Tripod into the Earth"',
        description: 'Equal pressure across the heel, base of big toe, and base of pinky toe, actively twisting the floor outwards.',
        mechanics: ['Generates instant external rotation torque in the hip', 'Engages the arch', 'Roots the body like a tree']
      }
    },
    mentalTransmutation: {
      physicalState: 'Barefoot sensory connection and active foot tripod.',
      neurologicalImpact: 'Massive sensory upregulation in the somatosensory cortex via plantar mechanoreceptors.',
      confidenceShift: 'Literal feeling of being "grounded". When your feet grip the earth, anxiety subsides; you occupy space with stability.'
    }
  },

  {
    id: 'torsion-stability',
    number: 2,
    romanNumeral: '02',
    title: 'Torsion & Joint Stability',
    subtitle: 'Tibial Rotation, Valgus Prevention & Glute Torque',
    tagline: 'Joints are not simple door hinges; they are hydraulic spiral helices governed by torsional tension.',
    iconName: 'Compass',
    accentColor: '#0ea5e9', // Sky blue
    anatomicalFocus: [
      'Tibial External Rotation Spiral',
      'Patellofemoral Tracking Axis',
      'Gluteus Medius & Maximus Torque',
      'The "Screw-Home" Knee Mechanism'
    ],
    firstPrinciple:
      'Straight lines do not exist in human movement. Biological tissue transfers load through helices and spirals (the fascial spiral lines). When the hip externally rotates, it generates torque that "screws" the femoral head deep into the acetabulum, transforming the knee from a vulnerable, loose hinge into a rock-solid, shock-absorbing structure.',
    kineticLink:
      'Glute amnesia prevents hip external rotation; the femur rolls inward (internal rotation), the knee collapses into dynamic valgus, transferring shear force to the ACL and meniscus.',
    dysfunctions: [
      {
        name: 'Dynamic Knee Valgus (Knee Cave)',
        symptom: 'Knees collapse inwards towards each other when jumping, landing, or rising from a heavy squat.',
        rootCause: 'Underactive gluteus medius and piriformis failing to oppose the internal rotation vector of the adductors.',
        cascadeEffect: 'Chronic patellar tendonitis, runner’s knee, high risk of non-contact ACL rupture, collapsed ankle.'
      },
      {
        name: 'Femoral Anterior Glide Syndrome',
        symptom: 'Sharp pinching or deep ache in the front crease of the hip during deep squats or lunges.',
        rootCause: 'Dominant tensor fasciae latae (TFL) and hip flexors with inhibited posterior glute stabilizers.',
        cascadeEffect: 'Loss of hip hinge depth; body rounds lumbar spine prematurely to artificially reach squat depth.'
      }
    ],
    diagnostics: [
      {
        id: 'single-leg-trendelenburg-test',
        title: 'The 30-Second Single-Leg Trendelenburg Screen',
        timeEstimate: '1 minute',
        difficulty: 'Quick (1 min)',
        instructions: [
          'Stand in front of a mirror barefoot.',
          'Lift one foot off the ground, bringing the thigh to 90 degrees.',
          'Observe the horizontal line of your hips and pelvis for 30 seconds.',
          'Notice if the opposite hip dips downward or if your torso leans sideways to compensate.'
        ],
        passingCriteria: 'Pelvis remains completely level; zero lateral torso shift; supporting knee tracks directly over 2nd toe.',
        failingSignal: 'Opposite hip drops (Trendelenburg sign), supporting knee shakes inward, or upper body leans sideways.',
        prescriptionIfFailed: 'Isometric side planks with top-leg abduction + Single-leg Romanian deadlifts focusing on pelvis leveling.'
      }
    ],
    drills: [
      {
        name: 'The "Screw the Floor" Glute Drive',
        target: 'Gluteus Medius, Maximus & Deep Hip Rotators (Gemelli, Obturators)',
        frequency: 'Pre-squat or daily: 3 sets of 8 reps with 3-sec holds',
        difficulty: 'Foundational',
        howTo: [
          'Stand with feet shoulder-width, toes angled out slightly (5–15°).',
          'Establish the foot tripod.',
          'Without physically moving your feet, imagine you are trying to rip a paper towel apart between your feet, or corkscrewing your heels inward and knees outward.',
          'Feel the side of your hips and your glutes harden like stone.'
        ],
        cues: ['Spread the floor', 'Turn your knees out without lifting the big toe', 'Hips lock like a vault']
      },
      {
        name: 'Elevated Spanish Squat Isometric',
        target: 'Quadriceps tendon loading & patellofemoral pain resolution',
        frequency: '3 sets of 45-second holds',
        difficulty: 'Intermediate',
        howTo: [
          'Loop a heavy resistance band around a post and behind both knees.',
          'Step back until high tension pulls your knees forward.',
          'Squat down to a 70-degree knee bend with a vertical shin.',
          'Hold isometrically while resisting the band pulling your knees inward.'
        ],
        cues: ['Vertical shins', 'Crush the band into the crease behind the knee', 'Abs tight']
      }
    ],
    cueVisualizer: {
      movement: 'Squat Descent & Ascent',
      brokenCue: {
        title: '"Just push your knees out"',
        description: 'Exaggerating knee flare causes the inner foot tripod to lift off, losing big toe propulsion and stressing the lateral knee.',
        consequences: ['Supination of foot', 'Loss of adductor balance', 'Inefficient force path']
      },
      lockedInCue: {
        title: '"Knees track over 2nd toe while spreading the floor"',
        description: 'Allows the femur to track in harmonious alignment with the foot vector while engaging maximum glute torque.',
        mechanics: ['Equal load sharing between glutes, quads, and hamstrings', 'Knee protected in compression rather than shear']
      }
    },
    mentalTransmutation: {
      physicalState: 'Hip torque and rotational pelvis stability.',
      neurologicalImpact: 'Activation of the body’s largest motor units (gluteal complex), increasing central nervous system drive.',
      confidenceShift: 'Eliminates structural timidity. You no longer feel physically fragile or hesitant to take decisive physical steps.'
    }
  },

  {
    id: 'core-cylinder',
    number: 3,
    romanNumeral: '03',
    title: 'The Core & The Cylinder',
    subtitle: 'Pelvic Bowl, 360° Intra-Abdominal Pressure & Diaphragm',
    tagline: 'Your core is not a flat washboard; it is a pressurized hydraulic cylinder connecting your ground anchors to your upper carriage.',
    iconName: 'Shield',
    accentColor: '#f59e0b', // Amber
    anatomicalFocus: [
      'Neutral Pelvic Floor (Combating Anterior Pelvic Tilt)',
      'Intra-Abdominal Pressure (Transverse Abdominis & Obliques)',
      'Respiratory Diaphragmatic Excursion',
      'Thoracolumbar Fascial Bracing'
    ],
    firstPrinciple:
      'The spine is an inherently unstable stack of blocks. Without intra-abdominal pressure (IAP), the human spine would buckle under as little as 20 lbs of vertical load. True core stability is not crunches or six-pack aesthetics; it is a 360-degree pneumatic balloon created when the diaphragm descends against a coordinated pelvic floor and abdominal wall.',
    kineticLink:
      'An unstacked cylinder (ribcage flared, anterior pelvic tilt) leaks hydraulic pressure. The lower back takes the entire load, shutting off the glutes and causing chronic hamstring tightness.',
    dysfunctions: [
      {
        name: 'The "Open Scissors" Posture (Rib Flare + Anterior Pelvic Tilt)',
        symptom: 'Ribcage visibly sticks out; prominent lower belly pooch despite low body fat; chronic lower back tightness.',
        rootCause: 'Breathing exclusively into the upper chest; chronically shortened psoas and weak transverse abdominis.',
        cascadeEffect: 'Diaphragm and pelvic floor are unaligned; unable to generate IAP, causing facet joint compression in L4-L5-S1.'
      },
      {
        name: 'Chest / Apical Hyper-Ventilation',
        symptom: 'Shoulders shrug upward on every inhalation; unable to take a deep breath into the belly and lower back.',
        rootCause: 'Modern stress, tight waistbands, and prolonged slouched seating keeping the sympathetic nervous system on high alert.',
        cascadeEffect: 'Overworks sternocleidomastoid and scalene neck muscles, causing chronic neck pain, headaches, and anxiety.'
      }
    ],
    diagnostics: [
      {
        id: '360-iap-breath-test',
        title: 'The 360° Hydraulic Cylinder Breath Screen',
        timeEstimate: '2 minutes',
        difficulty: 'Quick (1 min)',
        instructions: [
          'Sit on a firm chair or lie flat on your back with knees bent at 90°.',
          'Place your thumbs in your lower back (quadratus lumborum area) and your fingers wrapping around your sides into the obliques.',
          'Take a slow, quiet 4-second inhalation through your nose.',
          'Observe where the expansion occurs: do your fingers and thumbs expand outward equally 360°, or does only your chest rise?'
        ],
        passingCriteria: 'Visible and tactile 360° circumferential expansion into your fingers, lower ribs, and thumbs, with zero shoulder rise.',
        failingSignal: 'Shoulders rise towards ears, belly sucks in (paradoxical breathing), or zero expansion into the lower back/thumbs.',
        prescriptionIfFailed: 'Crocodile breathing (lying prone with forehead on hands, breathing into the floor) 5 minutes nightly.'
      }
    ],
    drills: [
      {
        name: 'The 90/90 Respiration with Ribcage Depression',
        target: 'Zone of Apposition (ZOA), Diaphragm-Pelvis alignment, Deep Obliques',
        frequency: 'Daily: 4 sets of 5 deep respiratory cycles',
        difficulty: 'Intermediate',
        howTo: [
          'Lie on back with feet flat against a wall, hips and knees at 90 degrees.',
          'Gently drag heels downward to feel hamstrings engage and tilt pelvis slightly into neutral (tailbone slightly off floor).',
          'Inhale quietly through nose for 4 seconds, feeling expansion in lower ribs.',
          'Exhale fully through an open mouth (fogging a mirror) for 8 seconds until the ribcage drops flat against the floor.',
          'Pause 4 seconds at the bottom of the breath without losing rib position.'
        ],
        cues: ['Fog the glass on the exhale', 'Drop ribs like Venetian blinds', 'Keep back flat to the floor']
      },
      {
        name: 'Deadbug with Wall Press',
        target: 'Anti-extension core bracing & hip dissociation',
        frequency: '3 sets of 6 reps per leg',
        difficulty: 'Foundational',
        howTo: [
          'Lie on back with head near a wall.',
          'Press both palms firmly backward into the wall, activating lats and abs.',
          'Bring knees to 90 degrees.',
          'Slowly extend one leg forward just above the floor without allowing the lower back to arch off the mat.'
        ],
        cues: ['Crush a grape under your lower back', 'Push the wall through the foundation', 'Controlled breathing']
      }
    ],
    cueVisualizer: {
      movement: 'Bracing for Heavy Movement',
      brokenCue: {
        title: '"Suck your stomach in to your spine"',
        description: 'Hollowing the stomach narrows the cylinder base, decreases intra-abdominal pressure, and renders the spine vulnerable.',
        consequences: ['Loss of stability', 'Increased spinal shear', 'Diaphragm restriction']
      },
      lockedInCue: {
        title: '"Expand 360° into a belt, then lock the shield"',
        description: 'Inhale deep into belly and back, creating pneumatic pressure, then contract abs outward against that air column.',
        mechanics: ['Maximum hydraulic rigidity', 'Spine decompressed from within', 'Glutes and lats primed to fire']
      }
    },
    mentalTransmutation: {
      physicalState: 'Stacked ribcage-over-pelvis and diaphragmatic regulation.',
      neurologicalImpact: 'Vagal nerve stimulation via the phrenic diaphragm; downshifts autonomic state from sympathetic to parasympathetic.',
      confidenceShift: 'Eliminates chronic, low-grade physical anxiety. When your center is pressurized and your breath is low, your heart rate stabilizes in tense situations.'
    }
  },

  {
    id: 'upper-carriage',
    number: 4,
    romanNumeral: '04',
    title: 'The Upper Carriage',
    subtitle: 'Scapulothoracic Gliding, Lat Tension & Cervical Alignment',
    tagline: 'The shoulders and neck reflect the foundation below. You cannot open the chest while the pelvis is unstacked.',
    iconName: 'Layers',
    accentColor: '#8b5cf6', // Violet
    anatomicalFocus: [
      'Scapular Depression & Retraction (Serratus Anterior & Lower Trapezius)',
      'Thoracic Spine Extension (T1–T12 Mobility)',
      'Latissimus Dorsi Tension & Spinal Linkage',
      'Deep Cervical Flexors (Axial Neck Extension)'
    ],
    firstPrinciple:
      'The shoulder blade has no bony attachment to the skeleton except the tiny clavicle joint; it floats on a muscular bed of fascia over the ribcage. When modern screen posture rounds the thoracic spine, the shoulder blade tilts anteriorly, trapping the rotator cuff tendons (impingement) and forcing the neck into forward crane posture.',
    kineticLink:
      'Tight, inhibited lats fail to connect the humerus to the thoracolumbar fascia, causing upper body disconnect from the hips in pulling and pushing motions.',
    dysfunctions: [
      {
        name: 'Upper Crossed Syndrome (Forward Head + Rolled Shoulders)',
        symptom: 'Ears sit ahead of shoulder line; hunch at base of neck (dowager’s hump); constant tight upper traps.',
        rootCause: 'Screens, sitting, and excessive bench pressing without balancing horizontal rowing and face-pulls.',
        cascadeEffect: 'Reduces lung capacity by up to 30%; pinches subacromial space causing chronic shoulder impingement.'
      },
      {
        name: 'Scapular Winging (Inhibited Serratus Anterior)',
        symptom: 'Shoulder blades stick out like angel wings from the back during pushups or arm elevation.',
        rootCause: 'Long thoracic nerve dysfunction or weak serratus anterior failing to pin the scapula to the ribcage.',
        cascadeEffect: 'Instability in overhead lifts; forces upper traps and levator scapulae to overwork, causing chronic tension.'
      }
    ],
    diagnostics: [
      {
        id: 'back-to-wall-shoulder-slide',
        title: 'The Wall Angel Mobility & Retraction Screen',
        timeEstimate: '2 minutes',
        difficulty: 'Focused (3 min)',
        instructions: [
          'Stand with heels, glutes, upper back, and back of head flat against a wall.',
          'Ensure your lower back is not excessively arched (should only fit a flat hand behind lumbar).',
          'Raise arms into a "goalpost" position (elbows and back of wrists touching the wall at 90°).',
          'Slowly slide your arms overhead into a "Y" shape while keeping elbows and wrists pinned to the wall.'
        ],
        passingCriteria: 'Wrists, elbows, head, and thoracic spine remain in continuous contact with wall throughout full slide.',
        failingSignal: 'Wrists peel off the wall, ribs flare forward violently, or head juts forward off the wall.',
        prescriptionIfFailed: 'Foam roller thoracic extensions + Kettlebell Armbars + Serratus wall slides.'
      }
    ],
    drills: [
      {
        name: 'The Serratus Wall Slide with Foam Roller',
        target: 'Serratus Anterior upward rotation and ribcage hug',
        frequency: '3 sets of 10 smooth reps',
        difficulty: 'Foundational',
        howTo: [
          'Place a foam roller against a wall at chest height.',
          'Put forearms on the roller in parallel, pinkies against the roller.',
          'Protract shoulder blades (push ribcage away from the wall).',
          'Slowly roll the foam roller upward towards full elevation without arching the lower back.'
        ],
        cues: ['Wrap the shoulder blades around your ribs', 'Stay tall', 'Do not shrug into your ears']
      },
      {
        name: 'Cervical Chin Tuck & Axial Extension',
        target: 'Longus Colli & Capitis (Deep Neck Flexors)',
        frequency: 'Throughout the day: 10 reps with 5-second isometric hold',
        difficulty: 'Foundational',
        howTo: [
          'Look straight ahead with eyes level with the horizon.',
          'Place two fingers on your chin.',
          'Without looking down, slide your chin straight backward as if making a double chin, lengthening the back of your neck.',
          'Hold 5 seconds, feeling the deep stabilizers at the front of your neck work.'
        ],
        cues: ['Make a double chin', 'Grow 1 inch taller through the crown of your head', 'Retract, don’t flex']
      }
    ],
    cueVisualizer: {
      movement: 'Bench Press & Overhead Press Support',
      brokenCue: {
        title: '"Squeeze shoulder blades back as hard as possible"',
        description: 'Passive pinching without depression traps the scapulae in retraction, preventing upward rotation and causing impingement.',
        consequences: ['Loss of serratus engagement', 'Rotator cuff pinch', 'Rib flare']
      },
      lockedInCue: {
        title: '"Put your shoulder blades in your back pockets"',
        description: 'Actively depresses and stabilizes the scapulae with the lower traps and lats, creating a rock-solid shelf.',
        mechanics: ['Full humeral joint centration', 'Lat tension transferred into the core', 'Open chest without hyperextending']
      }
    },
    mentalTransmutation: {
      physicalState: 'Expanded thoracic carriage, depressed scapulae, retracted chin.',
      neurologicalImpact: 'Reverses the evolutionary mammalian "freeze / cringe" reflex of tucking the neck and rounding the shoulders.',
      confidenceShift: 'Commanding physical stature. Unconscious body language broadcasts competence, openness, and readiness rather than defensive submissiveness.'
    }
  },

  {
    id: 'mind-presence',
    number: 5,
    romanNumeral: '05',
    title: 'The Mind & Presence',
    subtitle: 'Somatosensory Feedback, Vagal Regulation & Grounded Confidence',
    tagline: 'Confidence is not a thought; it is an embodied physiological state rooted in somatic stability.',
    iconName: 'Zap',
    accentColor: '#ec4899', // Pink / Fuchsia
    anatomicalFocus: [
      'Vestibular-Ocular Reflex & Horizontal Gaze',
      'Vagal Tone & Parasympathetic Dominance',
      'Proprioceptive Body Schema Mapping',
      'Somatic Feedback Loop of Stature'
    ],
    firstPrinciple:
      'The brain does not exist in a vacuum; it is constantly reading afferent signals from the body (interoception and proprioception). When your feet grip the ground, your pelvis is centered, and your breath is diaphragmatic, the brain receives continuous feedback: "I am stable, I am safe, I am supported." This is the neuro-biological bedrock of genuine self-confidence.',
    kineticLink:
      'Physical alignment frees mental bandwidth. When you are no longer subconsciously fighting gravity or dealing with chronic joint ache, your executive function and social presence expand exponentially.',
    dysfunctions: [
      {
        name: 'The Subconscious Cringe / Threat Posture',
        symptom: 'Shallow breathing, nervous fidgeting, eyes darting downward, arms held tight to body.',
        rootCause: 'Chronic sympathetic nervous system dominance driven by physical misalignment and digital overload.',
        cascadeEffect: 'Elevates cortisol, lowers vocal resonance, creates self-doubt in social and professional settings.'
      },
      {
        name: 'Sensory Amnesia (Disembodiment)',
        symptom: 'Living entirely in the head; unable to feel where your feet are or sense pelvic tilt without looking.',
        rootCause: 'Sedentary intellectual work disconnected from physical exertion and barefoot ground contact.',
        cascadeEffect: 'Clumsiness, anxiety, lack of physical intuition, vulnerability to injury.'
      }
    ],
    diagnostics: [
      {
        id: 'eyes-closed-proprioception-test',
        title: 'The Eyes-Closed Romberg Kinetic Screen',
        timeEstimate: '2 minutes',
        difficulty: 'Quick (1 min)',
        instructions: [
          'Stand barefoot with feet glued completely together (inner ankles touching).',
          'Cross your arms over your chest.',
          'Close your eyes completely and breathe slowly through your nose.',
          'Maintain balance for 60 seconds without opening your eyes or taking a corrective step.'
        ],
        passingCriteria: 'Stable stance for 60 seconds with minor micro-adjustments in ankles, zero panic or flailing.',
        failingSignal: 'Opening eyes within 15 seconds, taking a step to catch balance, or severe trembling.',
        prescriptionIfFailed: 'Single-leg barefoot balance with head turns + barefoot trail walking or balance beam practice.'
      }
    ],
    drills: [
      {
        name: 'The Grounded Stature Drill (The 10-Second Reset)',
        target: 'Full Kinetic Chain integration from Ground to Crown',
        frequency: 'Before entering any meeting, workout, or challenging social situation',
        difficulty: 'Foundational',
        howTo: [
          'Grip the ground with your foot tripod.',
          'Screw your hips outwards to engage your glutes.',
          'Stack your ribcage over your pelvis and take one 360° diaphragmatic breath.',
          'Drop your shoulders into your back pockets.',
          'Lengthen the back of your neck and set your gaze level with the horizon.',
          'Exhale slowly and speak from the diaphragm.'
        ],
        cues: ['Root the feet', 'Shield the core', 'Open the carriage', 'Level the gaze']
      },
      {
        name: 'Box Breathing with Vagal Sigh',
        target: 'Autonomic nervous system down-regulation',
        frequency: 'Daily: 5 minutes upon waking or post-workout',
        difficulty: 'Foundational',
        howTo: [
          'Inhale 4 seconds deeply through the nose expanding the belly.',
          'Hold for 4 seconds at the top with relaxed throat.',
          'Exhale 4 seconds smoothly through the nose or mouth.',
          'Hold 4 seconds empty at the bottom.',
          'Repeat for 6–10 cycles, finishing with one deep physiological sigh (double inhale through nose, long audible exhale).'
        ],
        cues: ['Relax jaw and eyes', 'Drop the tongue from the roof of the mouth', 'Let the floor hold your weight']
      }
    ],
    cueVisualizer: {
      movement: 'Entering Space / Presence',
      brokenCue: {
        title: '"Puff your chest out and fake confidence"',
        description: 'Forcing an aggressive chest puff introduces rib flare, arches the lower back, and tenses the neck into artificial rigidity.',
        consequences: ['Visible stiffness', 'Shallow breathing', 'Fragile posture that collapses under pressure']
      },
      lockedInCue: {
        title: '"Root into the earth, expand through the crown"',
        description: 'A relaxed, balanced alignment where gravity flows straight through the bones rather than being fought by tense muscles.',
        mechanics: ['Effortless verticality', 'Vocal cords relaxed for resonant speech', 'Calm, unflinching presence']
      }
    },
    mentalTransmutation: {
      physicalState: 'Full unbroken kinetic alignment.',
      neurologicalImpact: 'Peak autonomic equilibrium: high vagal tone, lowered baseline cortisol, optimal testosterone-to-cortisol ratio.',
      confidenceShift: 'Unshakeable authentic presence. You do not need to posture, shout, or prove anything. Your physical vessel speaks for itself.'
    }
  }
];
