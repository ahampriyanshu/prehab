import type { JournalEntry } from '@/types/journal';

export const AUTHOR = 'Priyanshu Tiwari';

// Voice reference supplied by the author:
// https://ahampriyanshu.com/blog/expermenting-with-personal-finance/equity-markets-for-dummies-introduction
// Original fitness copy. Personal measurements and transformation stories are not invented.
export const ENTRIES: JournalEntry[] = [
  {
    slug: 'prologue',
    number: '01',
    category: 'Beginning',
    title: 'Prologue',
    summary:
      'A software engineer trying to understand food, exercise, and his own body. In that order (roughly).',
    takeaway:
      'Understand the basics, pick something manageable, and actually do it long enough to learn from it.',
    sections: [
      {
        paragraphs: [
          'Getting into fitness should be fairly straightforward. Eat reasonably well, move around, lift something occasionally, sleep. Then you open the internet.',
          'One person says breakfast is essential. Another says skipping it will fix your metabolism. Rice is making you fat, fruit has too much sugar, and apparently the walk you enjoyed does not count because your heart rate was in the wrong zone. All of them have a discount code.',
          'I am a software engineer in my twenties, trying to understand what is worth paying attention to. There is plenty of information available. The difficult part is knowing what applies to an ordinary person with a job, a grocery budget, and no plans to step on a bodybuilding stage.',
          'This series is my attempt to put the basics in one place. Food first. Then body composition, fasting, protein and carbs, lifting, and cardio. Some research, some questions, and hopefully fewer reasons to spend an entire evening comparing workout plans.',
        ],
      },
      {
        title: 'Scope / Attribution',
        paragraphs: [
          'These are learning notes, not an individual diet or training prescription. The explanations link to their sources. Personal preference is called out where it matters, and the numerical examples are examples (please do not mistake an imaginary person in a calculation for my transformation story).',
          'The goal is to understand enough to make sensible everyday decisions. A health condition, an injury, or a complicated relationship with food needs more individual attention than a blog can provide.',
        ],
      },
      {
        title: 'A few terms before we start',
        paragraphs: [
          'Fitness discussions use several different goals as though they mean the same thing. They do not quite mean the same thing.',
        ],
        list: {
          items: [
            {
              label: 'Body weight',
              text: 'Everything on the scale: fat, muscle, bone, water, and the rest. The scale does not provide an itemised bill.',
            },
            {
              label: 'Body composition',
              text: 'What that weight consists of. Body-fat percentage describes one part of it.',
            },
            {
              label: 'Strength',
              text: 'The ability to produce force. Getting stronger at an exercise involves learning it as well as physical adaptation.',
            },
            {
              label: 'Hypertrophy',
              text: 'An increase in muscle size. Usually what someone means when they say they want to build muscle.',
            },
            {
              label: 'Aerobic fitness',
              text: 'The capacity to keep doing activity that depends on the body delivering and using oxygen. Relevant when the lift is out of order.',
            },
          ],
        },
      },
      {
        title: 'Why start in my twenties?',
        paragraphs: [
          'Because these are the years I am living through. It would be nice to use them for more than becoming increasingly efficient at sitting in front of a screen.',
          'Looking better is a perfectly understandable reason to begin. So is being able to walk further, lift something without feeling helpless, or enjoy a trip that involves stairs. The important part is knowing which of these I am working towards. A lower number on a scale does not automatically answer all of them.',
          'There is also a practical constraint: this has to fit into a life. A routine requiring unlimited time, a private chef, and a permanently enthusiastic version of myself is unlikely to survive contact with Tuesday.',
          'So we will start with food. Everybody already has a relationship with it, long before somebody introduces the word “macros”.',
        ],
      },
    ],
  },
  {
    slug: 'my-relationship-with-food',
    number: '02',
    category: 'Food',
    title: 'My relationship with food',
    summary:
      'Understanding what is on the plate without turning every meal into an accounting exercise.',
    takeaway:
      'Learn what the usual meals contain. Make useful additions and adjustments before declaring the entire kitchen a problem.',
    sections: [
      {
        paragraphs: [
          'Food becomes unnecessarily complicated the moment fitness enters the discussion. The same rice that was lunch yesterday is suddenly a controversial substance.',
          'I like food. I would prefer to keep liking it while learning to eat better. That means understanding the meal in front of me, including the portions and preparation, instead of deciding whether an ingredient belongs to the good team or the bad team.',
          'It also means admitting that food does several jobs. Hunger is one. Convenience, taste, and sitting down with other people are others. A plan that ignores all of them except the nutrition label is going to be difficult to live with.',
        ],
      },
      {
        title: 'Calories / Nutrients',
        paragraphs: [
          'A calorie is a unit of energy. The kcal on a food label is what people normally mean when they talk about calories. The body needs that energy for ordinary functions as well as exercise.',
          'Energy intake and expenditure affect body weight over time. Eating more energy than the body uses tends to increase weight; eating less tends to reduce it. This describes energy balance. It does not tell us whether a meal supplies enough protein, fibre, vitamins, or minerals.',
          'Two foods can provide similar energy and have different nutritional value. So “how much energy?” and “what else am I getting?” are both useful questions. I do not have to discard one to care about the other.',
        ],
        references: [
          {
            title: 'NHS — Understanding calories',
            url: 'https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/understanding-calories/',
          },
          {
            title: 'NHS — Eating a balanced diet',
            url: 'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/',
          },
        ],
      },
      {
        title: 'The serving-size problem',
        paragraphs: [
          'The number on the front of a packet is missing an important detail: for how much food? Check whether the information is per serving, per 100 g, or for the whole pack. A serving on a label is not an instruction about how much you personally need to eat.',
          'Imagine a fictional 60 g snack packet. Its label gives the following values for a 30 g serving. Eating the whole packet means multiplying both numbers by two. Very basic maths, but quite easy to forget when the front of the packet has already said “high protein” in a large font.',
        ],
        table: {
          caption:
            'Illustrative label — these values are made up for the calculation.',
          columns: ['Amount eaten', 'Energy', 'Protein'],
          rows: [
            ['30 g (one serving)', '150 kcal', '6 g'],
            ['60 g (whole packet)', '300 kcal', '12 g'],
          ],
        },
        references: [
          {
            title: 'FDA — Understanding serving information',
            url: 'https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label',
          },
        ],
      },
      {
        title: 'Working with the food I already eat',
        paragraphs: [
          'A practical place to start is the usual meal. Rice or roti, dal, vegetables, curd, eggs, tofu, fish, chicken: there are plenty of familiar ingredients to work with. The combination and portions matter. There is no need to replace everything with food that comes in a subscription box.',
          'My approach to planning a meal is fairly simple:',
        ],
        list: {
          ordered: true,
          items: [
            {
              text: 'Identify a protein source. If the meal barely has one, consider what could be added.',
            },
            {
              text: 'Keep a suitable source of energy, such as rice, bread, potatoes, or another staple.',
            },
            {
              text: 'Include vegetables or fruit, and some variety across the day.',
            },
            {
              text: 'Consider the practical details: taste, cost, preparation time, and whether I would eat it again.',
            },
          ],
        },
        note: {
          title: 'Note',
          text: 'A balanced pattern works across meals and days. Every individual plate does not need to be a perfectly arranged nutrition diagram.',
        },
        references: [
          {
            title: 'NHS — The food groups in a balanced diet',
            url: 'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/',
          },
        ],
      },
      {
        title: 'The part a spreadsheet cannot fix',
        paragraphs: [
          'If lunch keeps getting delayed because work takes over, a more accurate calorie estimate will not create a lunch break. If the kitchen has no convenient ingredients, motivation has to do an unreasonable amount of work at dinner time.',
          'Keeping a few repeatable meals available sounds less interesting than finding the perfect diet. It is also much easier to use on a busy day. I would put some effort there before buying another supplement.',
          'And a meal out can remain a meal out. I do not find the term “cheat meal” useful. Enjoying dinner should not create a debt to be repaid on a treadmill the following morning.',
        ],
      },
    ],
  },
  {
    slug: '12-percent-fat',
    number: '03',
    category: 'Body composition',
    title: '12% Fat',
    summary:
      'A precise-looking target, an imprecise measurement, and the difference between losing weight and changing body composition.',
    takeaway:
      'Understand what the measurement means and how it was obtained. A body-fat reading is one piece of information, not a complete health report.',
    sections: [
      {
        paragraphs: [
          '“Get fit” is a vague goal. “12% body fat” looks much more convincing. There is a number, a unit, and an apparent finish line. Excellent. Now we only need to understand what we have decided to measure.',
          'The title is a useful starting point for that discussion. It is not a claim that I have reached 12%, and it is not a recommendation that everybody should aim for it. A percentage alone cannot tell us what is appropriate for a particular person.',
        ],
      },
      {
        title: 'Fat mass / Fat-free mass',
        paragraphs: [
          'Body-fat percentage expresses fat mass as a proportion of total body mass. Everything else is grouped under fat-free mass. That includes muscle, but also water, bones, organs, and other tissues. Fat-free mass and muscle mass are not interchangeable terms.',
        ],
        note: {
          title: 'The calculation',
          text: 'Body-fat percentage = fat mass ÷ total body mass × 100.',
        },
        references: [
          {
            title: 'Obesity Medicine Association — Body composition assessment',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10661987/',
          },
        ],
      },
      {
        title: 'A simple example',
        paragraphs: [
          'Take two hypothetical people who both weigh 80 kg. One has 16 kg of fat mass; the other has 20 kg. Their bathroom scales can show the same weight while their body composition differs.',
          'This example only explains the arithmetic. It does not rank either person’s health, strength, or appearance. Those require more information than these three columns provide.',
        ],
        table: {
          caption:
            'Hypothetical example — same body weight, different composition.',
          columns: ['Measure', 'Person A', 'Person B'],
          rows: [
            ['Total body mass', '80 kg', '80 kg'],
            ['Fat mass', '16 kg', '20 kg'],
            ['Fat-free mass', '64 kg', '60 kg'],
            ['Body fat', '20%', '25%'],
          ],
        },
      },
      {
        title: 'How do we measure it?',
        paragraphs: [
          'Common methods include skinfold measurements, bioelectrical impedance (used by many smart scales), and DXA scans. They use different measurements and assumptions. Their results do not necessarily agree.',
          'Bioelectrical impedance is affected by hydration, among other factors. A number displayed to one decimal place can still be an uncertain estimate. The screen being confident does not require me to be.',
          'If I track a measurement, using a consistent method and comparable conditions makes the comparison more useful. Switching between a gym machine, a home scale, and somebody’s visual estimate gives me three opinions, not a particularly good trend.',
        ],
        references: [
          {
            title: 'Obesity Medicine Association — Methods and limitations',
            url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10661987/',
          },
        ],
      },
      {
        title: 'What would reaching the number actually change?',
        paragraphs: [
          'Wanting to look leaner is understandable. But it is worth separating the appearance I have in mind from the measurement I am using. Body composition, muscle distribution, lighting, and how a photograph is taken all affect what I see. A percentage is not a rendering engine for the physique in my head.',
          'There is also the cost of pursuing a target. Can I train well? Am I eating enough to function? Is the routine compatible with normal meals and a social life? If those answers get worse, the fact that a number is moving in the desired direction is not sufficient reason to keep pushing.',
          'For my own notes, strength, energy, recovery, and consistency belong alongside any body measurement. If all I record is body fat, I have chosen to ignore most of the things I said I wanted fitness for.',
          'The goal can be specific. It should also remain open to revision when better information arrives.',
        ],
      },
    ],
  },
  {
    slug: 'fasting',
    number: '04',
    category: 'Food',
    title: 'Fasting',
    summary:
      'What an eating window changes, what it leaves unchanged, and why the clock cannot do all the work.',
    takeaway:
      'Treat fasting as an optional eating pattern. Judge it by whether it supports nutrition, daily life, and health, not by the length of the fast.',
    sections: [
      {
        paragraphs: [
          'Fasting has an obvious selling point: fewer rules about individual foods, one rule about time. Compared with calculating every ingredient in a meal, that sounds refreshingly simple.',
          'Then the claims start arriving. Weight loss, better focus, a complete metabolic reset. Before accepting the entire package, it helps to separate the eating schedule from the outcomes being promised.',
          'The first thing to know is that “intermittent fasting” describes several different patterns. A study of one pattern is not automatically evidence for every other version with the same label.',
        ],
      },
      {
        title: 'Important terms',
        paragraphs: ['A few terms that tend to get mixed together:'],
        list: {
          items: [
            {
              label: 'Eating window',
              text: 'The part of the day during which meals are eaten.',
            },
            {
              label: 'Time-restricted eating',
              text: 'Keeping eating within a daily window. “16:8”, for example, describes 16 hours without food and an 8-hour eating window. That is a definition, not a suggested schedule.',
            },
            {
              label: 'Intermittent fasting',
              text: 'A broader term that also includes patterns changing food intake across different days.',
            },
            {
              label: 'Calorie restriction',
              text: 'Reducing total energy intake. A smaller eating window and a lower energy intake can occur together, but they are different changes.',
            },
          ],
        },
        references: [
          {
            title: 'NIH — To fast or not to fast',
            url: 'https://newsinhealth.nih.gov/2019/12/fast-or-not-fast',
          },
        ],
      },
      {
        title: 'What does the evidence say?',
        paragraphs: [
          'A 12-month randomised trial involving 139 adults with obesity compared calorie restriction with and without an eight-hour eating window. The additional window did not produce a statistically significant extra weight-loss benefit.',
          'That does not mean meal timing can never matter, or that nobody finds the routine useful. It means this particular study did not support the idea that adding the window automatically produces a better result. Population, duration, and what else changed all matter when reading a claim.',
          'This is also why “I started fasting and lost weight” does not establish which change caused the result. The person may have changed their overall intake, meal choices, activity, or several things at once. An experience can be real while the explanation remains incomplete.',
        ],
        references: [
          {
            title:
              'NEJM — Calorie restriction with or without time-restricted eating',
            url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2114833',
          },
        ],
      },
      {
        title: 'The timetable still has to work',
        paragraphs: [
          'An eating window does not tell me how much protein I am getting, whether the diet is varied, or whether I have enough energy for training. Those tasks have not been outsourced to the clock.',
          'The practical questions are more useful than treating a longer fast as a higher score:',
        ],
        list: {
          items: [
            {
              text: 'Can I comfortably eat enough and get a reasonable variety of foods?',
            },
            { text: 'Can I concentrate and train without feeling unwell?' },
            {
              text: 'Does the schedule fit work and ordinary meals with other people?',
            },
            {
              text: 'Does it simplify eating, or make me think about food all day?',
            },
          ],
        },
        note: {
          title: 'Note',
          text: 'Accidentally missing lunch because of meetings is not much of an experiment. The calendar did that, not a carefully evaluated nutrition plan.',
        },
      },
      {
        title: 'When to leave it alone',
        paragraphs: [
          'Fasting is not recommended during pregnancy or breastfeeding, or for people with or at risk of eating disorders. Diabetes, medicines affected by food, and other health conditions require individual medical guidance before changing meal timing.',
          'For everyone else, it is still optional. Eating regular meals is a perfectly valid way to support a fitness routine. There is no compulsory fasting chapter in the process of becoming stronger.',
          'Personally, the test I would use is whether the pattern makes an ordinary day easier to manage. Following an inconvenient timetable very faithfully does not, on its own, make the timetable useful.',
        ],
        references: [
          {
            title: 'JAMA — Intermittent fasting and who should avoid it',
            url: 'https://jamanetwork.com/journals/jama/fullarticle/2784658',
          },
        ],
      },
    ],
  },
  {
    slug: 'protein-vs-carbs',
    number: '05',
    category: 'Food',
    title: 'Protein vs Carbs',
    summary:
      'The functions, the food sources, and the unnecessary civil war happening on the dinner plate.',
    takeaway:
      'Protein and carbohydrates have different jobs. Plan for both, remember fats and fibre, and check portions before comparing foods.',
    sections: [
      {
        paragraphs: [
          'Protein has had excellent marketing. Carbohydrates should probably hire the same agency.',
          'One is now printed on everything from yoghurt to biscuits. The other gets blamed for a surprising number of problems, despite appearing in foods as different as fruit, lentils, rice, and soft drinks.',
          'Before choosing a side, it helps to understand the jobs. A meal can contain protein and carbs at the same time. Most meals already do.',
        ],
      },
      {
        title: 'Protein: building and repair',
        paragraphs: [
          'Protein supplies amino acids, which the body uses to build and repair tissues, including muscle. Resistance training provides a stimulus; adequate nutrition helps support the response and recovery.',
          'Common sources include dairy, eggs, soy foods, pulses, fish, and meat. They differ in the amount and mix of amino acids they provide, as well as the other nutrients in the food. The amount eaten and the overall diet matter.',
          'Protein powder can be a convenient way to fill a gap. It is not required if the diet already supplies what is needed. Buying a large tub is significantly easier than training regularly, which is probably part of the appeal.',
        ],
        references: [
          {
            title: 'NIH Office of Dietary Supplements — Protein and exercise',
            url: 'https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/',
          },
        ],
      },
      {
        title: 'Carbs: fuel and food variety',
        paragraphs: [
          'Carbohydrates provide energy. The body stores some as glycogen, mainly in muscles and the liver. That stored fuel is useful during exercise, particularly when the work becomes prolonged or demanding.',
          'The category contains a lot of different foods. Oats, rice, fruit, beans, and a sweetened drink can all contain carbohydrates, but they do not provide the same fibre, micronutrients, or eating experience. Calling all of them “carbs” is accurate in the same way that calling every application “software” is accurate. You still have some important decisions left.',
          'There is no general requirement to remove carbohydrates when learning to lift. The useful questions are about the overall diet, activity, and individual needs.',
        ],
        references: [
          {
            title: 'MedlinePlus — Nutrition and athletic performance',
            url: 'https://medlineplus.gov/ency/article/002458.htm',
          },
        ],
      },
      {
        title: 'Comparing the jobs',
        paragraphs: [
          'This is a simplified comparison. Foods overlap across these categories; dal, for example, contributes both protein and carbohydrates.',
        ],
        table: {
          caption: 'A food can supply more than one macronutrient.',
          columns: ['Nutrient', 'Some roles', 'Food examples'],
          rows: [
            [
              'Protein',
              'Building and repairing tissues',
              'Eggs, dairy, soy, pulses, fish',
            ],
            [
              'Carbs',
              'Energy for daily activity and exercise',
              'Rice, roti, oats, potatoes, fruit',
            ],
            [
              'Fats',
              'Energy, cell function, and absorption of some vitamins',
              'Oils, nuts, seeds, oily fish',
            ],
          ],
        },
        references: [
          {
            title: 'NHS — Eating a balanced diet',
            url: 'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/',
          },
          {
            title: 'NHS — Why we need some dietary fat',
            url: 'https://www.nhs.uk/live-well/eat-well/food-types/different-fats-nutrition/',
          },
          {
            title: 'MedlinePlus — Nutrition and athletic performance',
            url: 'https://medlineplus.gov/ency/article/002458.htm',
          },
        ],
      },
      {
        title: 'Comparing foods without confusing the units',
        paragraphs: [
          '“100 g of a protein food” does not mean “100 g of protein”. It is the total weight of that food, including water, fat, carbohydrates, and everything else it contains.',
          'For a hypothetical example, suppose a label lists 20 g of protein per 100 g of product. A 40 g portion contains 20 × 40 ÷ 100 = 8 g of protein. Neither the word “protein” on the packet nor the size of the scoop changes the calculation.',
          'Also compare like with like. A value for dry lentils is not directly comparable to the same weight of cooked dal. The preparation changes the amount of water and may add other ingredients. Check which form the label or food database describes.',
        ],
        note: {
          title: 'A useful label check',
          text: 'Per serving or per 100 g? Raw or cooked? How much am I actually eating? Answer those before comparing the impressive numbers.',
        },
        references: [
          {
            title: 'FDA — Reading serving sizes and nutrient amounts',
            url: 'https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label',
          },
        ],
      },
      {
        title: 'Back to lunch',
        paragraphs: [
          'The outcome does not need to be complicated. Pick a protein source, keep a suitable staple, add vegetables or fruit, and account for fats as part of the meal. Dal with rice and vegetables, eggs with toast, or tofu with rice can be starting points. Portions and the rest of the day fill in the details.',
          'There is no universal ratio that turns every meal into the perfect meal. Training, appetite, preferences, health, and budget differ. A meal plan should be useful enough that I can explain why I am following it without forwarding a reel.',
        ],
      },
    ],
  },
  {
    slug: 'becoming-a-gymcel',
    number: '06',
    category: 'Training',
    title: 'Becoming a gymcel',
    summary:
      'Learning the movements, keeping a log, and resisting the urge to make rest periods a personality trait.',
    takeaway:
      'Choose a manageable programme, learn the movements, record comparable sessions, and progress gradually.',
    sections: [
      {
        paragraphs: [
          'There is an awkward stage between knowing nothing about the gym and knowing just enough to give unsolicited advice. I would like to get through it without becoming unbearable.',
          'The appeal is understandable. You turn up, do a defined amount of work, and record it. Next time, there is something to compare. For somebody whose other work can involve a full day of meetings followed by a mysterious bug, this is quite satisfying.',
          'But the first job is learning what the terms mean and how to perform the exercises. Purchasing the accessories can wait.',
        ],
      },
      {
        title: 'Gym jargon / Important concepts',
        paragraphs: ['Enough vocabulary to understand a basic programme:'],
        list: {
          items: [
            {
              label: 'Rep',
              text: 'One repetition of an exercise. Lowering and raising a weight through the intended movement is one rep.',
            },
            {
              label: 'Set',
              text: 'A group of repetitions before a rest. Three sets of eight reps is usually written as 3 × 8.',
            },
            {
              label: 'Load',
              text: 'The resistance used, such as the weight of a dumbbell or the setting on a machine.',
            },
            {
              label: 'Training volume',
              text: 'The amount of training. It can be described in different ways, including sets per muscle group per week. Check what someone means before comparing numbers.',
            },
            {
              label: 'Progressive overload',
              text: 'Increasing the training demand over time as capacity improves. More weight is one option; more controlled repetitions at the same weight can also make a session more demanding.',
            },
            {
              label: 'Training split',
              text: 'How training is distributed across sessions. Full body, upper/lower, and push/pull/legs are ways to organise the work.',
            },
          ],
        },
      },
      {
        title: 'Choosing a programme',
        paragraphs: [
          'A programme has to fit the number of days I can realistically train. Starting with the schedule of someone who practically lives in the gym makes very little sense. There is a reason they appear in the background of every exercise video.',
          'The ACSM’s 2026 guidance emphasises regular resistance training, covering the major muscle groups at least twice a week, and adapting the programme to the person. Bodyweight, bands, machines, and free weights can all be useful. Complicated programming is not an entry requirement.',
          'For a beginner, a qualified trainer can help choose suitable exercises and teach their setup and movement. Machines are a valid way to learn and train; free weights do not carry a certificate of moral superiority.',
          'Once there is a sensible plan, give it a fair run. Replacing it every time a different person makes a convincing video removes the opportunity to compare anything.',
        ],
        references: [
          {
            title: 'ACSM — 2026 resistance training guidelines',
            url: 'https://acsm.org/resistance-training-guidelines-update-2026/',
          },
        ],
      },
      {
        title: 'What progress looks like in a log',
        paragraphs: [
          'Imagine two sessions of the same exercise on the same machine, using the same setup and controlled range of movement. These are fictional numbers, not a progression schedule to copy.',
          'The second session has two additional repetitions at the same load. That is useful information. There is no need to add weight merely because the calendar has advanced. Any increase should fit the programme and what can be done with control.',
        ],
        table: {
          caption:
            'Illustrative exercise log — compare technique as well as numbers.',
          columns: ['Record', 'Session A', 'Session B'],
          rows: [
            ['Load', '10 kg', '10 kg'],
            ['Set 1', '8 reps', '9 reps'],
            ['Set 2', '8 reps', '9 reps'],
            ['Set 3', '8 reps', '8 reps'],
            ['Total', '24 reps', '26 reps'],
          ],
        },
        note: {
          title: 'Keep the comparison honest',
          text: 'Changing the machine, shortening the movement, or getting help changes what the number means. Write down enough context that next week’s comparison is useful.',
        },
      },
      {
        title: 'Recovery is part of the schedule',
        paragraphs: [
          'The ACSM review also found that reaching complete muscular failure on every set is not consistently necessary for the average healthy adult. A workout does not need a dramatic ending to count.',
          'There is ordinary exertion, and there is pain that needs attention. Sharp pain, or pain that persists, is a reason to stop the affected exercise and get qualified advice. Adding a motivational caption does not make it a training technique.',
          'Plan recovery time. Eat enough to support the work. If a session is missed, continue with an appropriate plan instead of trying to repay it with a punishment session. My calendar already has enough ways to turn a small problem into a large one.',
          'The aim is to become someone who trains regularly and understands what he is doing. Ideally, someone who can still have a conversation that does not include the word “hypertrophy”.',
        ],
        references: [
          {
            title: 'ACSM — What the evidence says about training to failure',
            url: 'https://acsm.org/resistance-training-guidelines-update-2026/',
          },
        ],
      },
    ],
  },
  {
    slug: 'cardio',
    number: '07',
    category: 'Training',
    title: 'Cardio',
    summary:
      'Walking counts. Effort matters. The calorie counter is only a very small part of the story.',
    takeaway:
      'Build aerobic activity gradually, choose something repeatable, and use effort and time to understand the work.',
    sections: [
      {
        paragraphs: [
          'Cardio is often presented as the tax you pay for eating something enjoyable. You ate the dessert; now please report to the treadmill.',
          'I would prefer a better reason. Being comfortable on a long walk, climbing stairs, or doing something active on holiday are all useful outcomes. They remain useful even when no device is assigning a calorie value to them.',
          'So, before deciding how much cardio belongs in the week, let’s establish what counts and how the intensity is described.',
        ],
      },
      {
        title: 'What counts as cardio?',
        paragraphs: [
          'Aerobic activity makes the heart beat faster and increases breathing. Brisk walking, cycling, swimming, and running can all count. The effort depends on the person and the activity.',
          'Walking therefore deserves a place in the discussion. It is accessible to many people, needs little equipment, and can fit around errands or a commute. Running is one option, not a compulsory upgrade everyone has to unlock.',
        ],
        references: [
          {
            title: 'CDC — What counts as physical activity',
            url: 'https://www.cdc.gov/physical-activity-basics/adding-adults/what-counts.html',
          },
        ],
      },
      {
        title: 'Moderate / Vigorous',
        paragraphs: [
          'The talk test is a rough way to judge relative effort. It is not a laboratory measurement, but it is easier to use than memorising a heart-rate chart before leaving the house.',
        ],
        table: {
          caption:
            'CDC talk test — how breathing affects speech during activity.',
          columns: ['Intensity', 'What speaking feels like'],
          rows: [
            [
              'Moderate',
              'A conversation is possible, but singing would be difficult.',
            ],
            [
              'Vigorous',
              'Only a few words are comfortable before pausing for breath.',
            ],
          ],
        },
        references: [
          {
            title: 'CDC — Measuring physical activity intensity',
            url: 'https://www.cdc.gov/physical-activity-basics/measuring/',
          },
        ],
      },
      {
        title: 'Understanding the weekly guideline',
        paragraphs: [
          'The general adult guideline is at least 150 minutes of moderate aerobic activity per week, or 75 minutes of vigorous activity, or an equivalent combination. Muscle-strengthening activity on at least two days is recommended as well.',
          'The minutes can be spread across the week. Below is one arithmetic example using moderate activity throughout. It is not a starting prescription: someone doing very little can begin with smaller amounts and build gradually. Some activity is better than none.',
        ],
        table: {
          caption:
            'Illustrative week — the activities must be moderate effort for this calculation.',
          columns: ['Activity', 'Time', 'Weekly total'],
          rows: [
            ['Brisk walks', '5 × 20 min', '100 min'],
            ['Cycling', '2 × 25 min', '50 min'],
            ['Total', '', '150 min'],
          ],
        },
        references: [
          {
            title: 'CDC — Adult physical activity guidelines',
            url: 'https://www.cdc.gov/physical-activity-basics/guidelines/adults.html',
          },
        ],
      },
      {
        title: 'Making it fit alongside lifting',
        paragraphs: [
          'There are two things to budget here: time and effort. Scheduling every available minute does not mean I will recover well from every session. The harder the activity, the more that needs consideration.',
          'For a beginner, an activity that is easy to access and pleasant enough to repeat is a sensible place to start. A nearby walk has an advantage over a theoretically perfect session that needs a long commute, a booking, and an argument with myself.',
          'Increase the workload gradually. If a health condition or symptoms make exercise uncertain, get individual advice. The example week is there to explain the total, not to override where someone is starting.',
          'Personally, I would like movement to keep some of its ordinary uses. Walking somewhere, cycling for pleasure, exploring a place on foot. Once every outing becomes an assessment, even leaving the house starts to feel like pending work.',
        ],
      },
    ],
  },
  {
    slug: 'epilogue',
    number: '08',
    category: 'Looking back',
    title: 'Epilogue',
    summary:
      'Knowing the terminology was the easy part. Now the routine has to survive an ordinary week.',
    takeaway:
      'Keep the basics repeatable. Review the plan when life changes, and leave enough room to enjoy what the effort makes possible.',
    sections: [
      {
        paragraphs: [
          'By this point, we have acquired enough vocabulary to make ordering lunch unnecessarily complicated. Hopefully, we have also learned enough to avoid doing that.',
          'The explanations are useful, but they do not perform the work. Understanding protein does not prepare a meal. Understanding progressive overload does not get me to the gym. A very well-organised reading list can coexist with a very inactive week.',
          'As a software engineer, I am comfortable with the idea that knowing how something works and maintaining it are separate jobs. It seems reasonable to extend that understanding to the person sitting in front of the computer.',
        ],
      },
      {
        title: 'What I am taking from this',
        paragraphs: [
          'The practical version of the series fits into a much shorter list:',
        ],
        list: {
          ordered: true,
          items: [
            {
              label: 'Food',
              text: 'Understand the usual meals and make them easier to prepare. Keep taste, affordability, and variety in the plan.',
            },
            {
              label: 'Measurements',
              text: 'Know what a number measures and what it leaves out. Use comparable observations instead of reacting to every reading.',
            },
            {
              label: 'Fasting',
              text: 'Optional. A schedule has to support eating well and daily life.',
            },
            {
              label: 'Protein and carbs',
              text: 'Different jobs, often present in the same foods. Compare actual portions and remember the rest of the diet.',
            },
            {
              label: 'Lifting',
              text: 'Learn the movements, follow a manageable plan, and keep enough notes to recognise progress.',
            },
            {
              label: 'Cardio',
              text: 'Choose repeatable activity, understand the effort, and build gradually.',
            },
          ],
        },
      },
      {
        title: 'Retrospection',
        paragraphs: [
          'There is an appealing version of this story where learning the basics permanently fixes the routine. After that, all decisions are sensible and every planned session happens. I suspect that version has never had a deadline.',
          'An ordinary week has work, travel, family, meals out, and days when enthusiasm is unavailable. The plan needs a way to operate under those conditions. Otherwise, I have designed a routine for someone else’s life and become annoyed that it does not fit mine.',
          'That is where understanding helps. I can change the schedule without changing every principle. I can return after a break without needing a completely new identity. And I can notice when the routine is taking more from the week than it adds.',
          'Looking better can remain part of the motivation. But being stronger, having energy for a trip, and feeling comfortable trying something physical are outcomes I can use while I am still in my twenties. It would be a strange result to spend these years preparing a body for a life I keep postponing.',
          'So that is the point of Prehab for me: learn enough, build something repeatable, and make use of it. There will be things to revise as I learn more. For now, I have enough information to stop opening tabs and go do something.',
        ],
      },
    ],
  },
];
