exports.Valeros =
{
  user: 'TestUser',
  basics: {
    name: 'Valeros',
    player: 'DM',
    LVL: '1',
    XP: '500',
    homeland: 'Andoran',
    deity: 'Cayden Cailean',
    alignment: 'Neutral Good',
    abilityBoost: '',
    type: 'Iconic',
    testparent: {
      testProps: 'TestPropValue'
    }
  },
  appearance: {
    age: '??',
    eyes: 'Brown',
    gender: 'Male',
    hair: 'Brown',
    height: '',
    weight: '',
  },
  mainStats: {
    HP: '20',
    CHA: '10',
    CON: '14',
    DEX: '14',
    INT: '12',
    STR: '18',
    WIS: '10',
    AC: '17',
    TOUCHAC: '15',
  },
  modifiers: {
    CHA: '+0',
    CON: '+2',
    DEX: '+2',
    INT: '+1',
    STR: '+4',
    WIS: '+0',
    FORT: '+4',
    REFLEX: '+4',
    WILL: '+1',
    TOUCHAC: '17 with shield raised',
    AC: '19 with shield raised',
    PER: '+2',
  },
  ancestryProps: {
    ancestry: 'Human',
    size: 'medium',
    speed: 25,
    languages: 'goblin, common',
    traits: ['human', 'humanoid'],
    attributes: {
    }
  },
  backgroundProps: {
    background: 'Farmhand',
    skillFeat: 'Assurance with Athletics',
    loreSkill: 'Farming',
  },
  classProps: {
    class: 'Fighter',
    keyAbility: ['STR', 'DEX'],
    proficiencies: {
      Perception: 'Expert'
    },
    savingThrows: {
      Fortitude: 'Expert',
      Reflex: 'Expert',
      Will: 'Trained',
    },
    skills: {
      trained: 3,
      additionalModifier: 'INT',
    },
    weapons: {
      simple: 'Expert',
      martial: 'Expert',
      exotic: 'Trained',
    },
    armor: {
      light: 'Trained',
      medium: 'Trained',
      heavy: 'Trained',
      shields: 'Trained',
    },
    signatureSkills: ['Acrobatics', 'Athletics', 'Crafting'],
    classFeatures: ['Attack of Opportunity'],
    items: ''
  },
  spells: {},
  feats: {
    ancestry: 'Natural Ambition',
    class: 'Reactive Shield, Sudden Charge',
  },
  items: {
    worn: 'backpack, breastplate',
    ready: 'dagger, heavy steel shield, longsword, mug, shortbow with 20 arrows',
    stowed: 'bedroll, flint and steel, rations (3), hemp rope (50 ft.) torches (10)',
    coins: {
      gold: 0,
      silver: 2,
      copper: 7,
      platinum: 0,

    },
    bulk: '5 Bulk, 8 light (encumbered beyond 9 Bulk, max 14 Bulk)',
  },
  skillsModifiers: {
    Acrobatics: '-2',
    Athletics: '+0 (+5)',
    Intimidation: '+1',
    Lore: {
      Farming: '+5',
      Warfare: '+2'
    },
  },
  skillFeats: 'Assurance (Athletics)',
  actions: {
    stride: '20 feet',
    melee: ['longsword +6 (versatile piercing), Damage 1d8+4 slashing',
      'dagger +6 (agile, finesse, thrown 10, versatile slashing), Damage 1d4+4 piercing',
      'shield bash +4, Damage 1d4+4 bludgeoning'],
    ranged: ['shortbow +4 (range 60, deadly 1d10), Damage 1d6 piercing']
  },
  traits: {},
  characterNotes: '',
};