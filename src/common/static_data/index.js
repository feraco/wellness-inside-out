/** Apple Categories and icons */
export const CategoriesList = [
  { id:"activity", name: "Activity", icon: require("@/assets/icons/Flame.png") },
  { id:"body", name: "Body Measurements", icon: require("@/assets/icons/Body.png") },
  { id:"hearing", name: "Hearing", icon: require("@/assets/icons/Hearing.png") },
  { id:"heart", name: "Heart", icon: require("@/assets/icons/Heart.png") },
  { id:"mindfulness", name: "Mindfulness", icon: require("@/assets/icons/Mindfulness.png") },
  { id:"mobility", name: "Mobility", icon: require("@/assets/icons/Mobility.png") },
  { id:"nutrition", name: "Nutrition", icon: require("@/assets/icons/Nutrition.png") },
  { id:"respiratory", name: "Respiratory", icon: require("@/assets/icons/Respiratory.png") },
  { id:"sleep", name: "Sleep", icon: require("@/assets/icons/Sleep.png") },
  { id:"symtoms", name: "Symptoms", icon: require("@/assets/icons/Symtoms.png") },
  { id:"vitals", name: "Vitals", icon: require("@/assets/icons/Vitals.png") },
  { id:"other", name: "Other Data", icon: require("@/assets/icons/Other.png") },
  { id:"survey", name: "Surveys", icon: require("@/assets/icons/Other.png"), customAction:"surveyUser" },
];

/** Apple Categories that need average instead of summation */
export const dataTypeToCalculateAverage = [
  "HKQuantityTypeIdentifierRestingHeartRate",
  "HKQuantityTypeIdentifierHeartRate",
  "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
  "HKQuantityTypeIdentifierBodyFatPercentage",
  "HKQuantityTypeIdentifierEnvironmentalAudioExposure",
  "HKQuantityTypeIdentifierOxygenSaturation",
  "HKQuantityTypeIdentifierBloodAlcoholContent",
  "HKQuantityTypeIdentifierRespiratoryRate",
  "HKQuantityTypeIdentifierWalkingDoubleSupportPercentage"
]

export const dataTypeToRounded = [
  "HKQuantityTypeIdentifierRestingHeartRate",
  "HKQuantityTypeIdentifierHeartRate",
  "HKQuantityTypeIdentifierHeartRateVariabilitySDNN",
  "HKQuantityTypeIdentifierRespiratoryRate"
]

export const logosByCategory = {
  'Activity':require("@/assets/icons/Flame.png"),
  'Body':require("@/assets/icons/Body.png"),
  "Hearing":require("@/assets/icons/Hearing.png"),
  "Heart": require("@/assets/icons/Heart.png"),
  "Mindfulness": require("@/assets/icons/Mindfulness.png"),
  "Mobility": require("@/assets/icons/Mobility.png"),
  "Nutrition": require("@/assets/icons/Nutrition.png"),
  "Respiratory": require("@/assets/icons/Respiratory.png"),
  "Sleep": require("@/assets/icons/Sleep.png"),
  "Symptoms": require("@/assets/icons/Symtoms.png"),
  "Vitals": require("@/assets/icons/Vitals.png"),
  "Other Data": require("@/assets/icons/Other.png"),
  "Surveys": require("@/assets/icons/Other.png"),
}


export const categoriesOfSubcategories = {
  'HKQuantityTypeIdentifierDistanceWalkingRunning': 'Activity',
  'HKQuantityTypeIdentifierActiveEnergyBurned':'Activity',
  'HKQuantityTypeIdentifierAppleStandTime':'Activity',
  'HKQuantityTypeIdentifierAppleStandHour':'Activity',
  'HKQuantityTypeIdentifierAppleExerciseTime':'Activity',
  'HKQuantityTypeIdentifierFlightsClimbed':'Activity',
  'HKQuantityTypeIdentifierPushCount':'Activity',
  'HKQuantityTypeIdentifierDistanceWheelchair':'Activity',
  'HKQuantityTypeIdentifierDistanceCycling':'Activity',
  'HKQuantityTypeIdentifierDistanceDownhillSnowSports':'Activity',
  'HKQuantityTypeIdentifierBasalEnergyBurned':'Activity',
  'HKQuantityTypeIdentifierSwimmingStrokeCount':'Activity',
  'HKQuantityTypeIdentifierDistanceSwimming':'Activity',
  'HKQuantityTypeIdentifierStepCount':'Activity',


  "HKQuantityTypeIdentifierBasalBodyTemperature":"Body",
  "HKQuantityTypeIdentifierBodyFatPercentage":"Body",
  "HKQuantityTypeIdentifierLeanBodyMass":"Body",
  "HKQuantityTypeIdentifierBodyTemperature":"Body",
  "HKQuantityTypeIdentifierBodyMass":"Body",
  "HKQuantityTypeIdentifierBodyMassIndex":"Body",
  "HKQuantityTypeIdentifierElectrodermalActivity":"Body",
  "HKQuantityTypeIdentifierHeight":"Body",
  "HKQuantityTypeIdentifierWaistCircumference":"Body",

  "HKSampleTypeIdentifierAudiogram":"Hearing",
  "HKQuantityTypeIdentifierEnvironmentalAudioExposure":"Hearing",

  "HKQuantityTypeIdentifierBloodPressureSystolic":"Heart",
  "HKQuantityTypeIdentifierBloodPressureDiastolic":"Heart",
  "HKQuantityTypeIdentifierHeartRateVariabilitySDNN":"Heart",
  "HKQuantityTypeIdentifierPeripheralPerfusionIndex":"Heart",
  "HKQuantityTypeIdentifierRestingHeartRate":"Heart",
  "HKQuantityTypeIdentifierHeartRate":"Heart",

  "HKCategoryTypeIdentifierMindfulSession":"Mindfulness",

  "HKQuantityTypeIdentifierWalkingDoubleSupportPercentage":"Mobility",
  "HKQuantityTypeIdentifierStairDescentSpeed":"Mobility",
  "HKQuantityTypeIdentifierStairAscentSpeed":"Mobility",
  "HKQuantityTypeIdentifierWalkingSpeed":"Mobility",
  "HKQuantityTypeIdentifierSixMinuteWalkTestDistance":"Mobility",
  "HKQuantityTypeIdentifierwalkingAsymmetryPercentage":"Mobility",

  "HKQuantityTypeIdentifierDietaryPantothenicAcid":"Nutrition",
  "HKQuantityTypeIdentifierDietarySelenium":"Nutrition",
  "HKQuantityTypeIdentifierDietarySodium":"Nutrition",
  "HKQuantityTypeIdentifierDietaryThiamin":"Nutrition",
  "HKQuantityTypeIdentifierDietaryVitaminA":"Nutrition",
  "HKQuantityTypeIdentifierDietaryEnergyConsumed":"Nutrition",
  "HKQuantityTypeIdentifierDietaryIron":"Nutrition",
  "HKQuantityTypeIdentifierDietaryMagnesium":"Nutrition",
  "HKQuantityTypeIdentifierDietaryManganese":"Nutrition",
  "HKQuantityTypeIdentifierDietaryMolybdenum":"Nutrition",
  "HKQuantityTypeIdentifierDietaryNiacin":"Nutrition",
  "HKQuantityTypeIdentifierDietaryPotassium":"Nutrition",
  "HKQuantityTypeIdentifierDietaryProtein":"Nutrition",
  "HKQuantityTypeIdentifierDietaryPhosphorus":"Nutrition",
  "HKQuantityTypeIdentifierDietaryRiboflavin":"Nutrition",
  "HKQuantityTypeIdentifierDietaryFatTotal":"Nutrition",
  "HKQuantityTypeIdentifierDietaryCarbohydrates":"Nutrition",
  "HKQuantityTypeIdentifierDietaryChloride":"Nutrition",
  "HKQuantityTypeIdentifierDietaryChromium":"Nutrition",
  "HKQuantityTypeIdentifierDietaryCholesterol":"Nutrition",
  "HKQuantityTypeIdentifierDietaryCopper":"Nutrition",
  "HKQuantityTypeIdentifierDietaryFiber":"Nutrition",
  "HKQuantityTypeIdentifierDietaryFatSaturated":"Nutrition",
  "HKQuantityTypeIdentifierDietaryFatMonounsaturated":"Nutrition",
  "HKQuantityTypeIdentifierDietaryFatPolyunsaturated":"Nutrition",
  "HKQuantityTypeIdentifierDietaryBiotin":"Nutrition",
  "HKQuantityTypeIdentifierDietaryCaffeine":"Nutrition",
  "HKQuantityTypeIdentifierDietaryCalcium":"Nutrition",
  "HKQuantityTypeIdentifierDietarySugar":"Nutrition",
  "HKQuantityTypeIdentifierDietaryFolate":"Nutrition",
  "HKQuantityTypeIdentifierDietaryWater":"Nutrition",
  "HKQuantityTypeIdentifierDietaryIodine":"Nutrition",
  "HKQuantityTypeIdentifierDietaryVitaminB6":"Nutrition",
  "HKQuantityTypeIdentifierDietaryVitaminB12":"Nutrition",
  "HKQuantityTypeIdentifierDietaryVitaminC":"Nutrition",
  "HKQuantityTypeIdentifierDietaryVitaminD":"Nutrition",
  "HKQuantityTypeIdentifierDietaryVitaminE":"Nutrition",
  "HKQuantityTypeIdentifierDietaryVitaminK":"Nutrition",
  "HKQuantityTypeIdentifierDietaryZinc":"Nutrition",

  "HKQuantityTypeIdentifierBloodAlcoholContent":"Other Data",
  "HKQuantityTypeIdentifierInhalerUsage":"Other Data",
  "HKQuantityTypeIdentifierInsulinDelivery":"Other Data",
  "HKQuantityTypeIdentifierNumberOfTimesFallen":"Other Data",
  "HKQuantityTypeIdentifierSexualActivity":"Other Data",
  "HKQuantityTypeIdentifierUvExposure":"Other Data",
  "HKQuantityTypeIdentifierBloodGlucose":"Other Data",
  "HKCategoryTypeIdentifierToothbrushingEvent":"Other Data",
  "HKCategoryTypeIdentifierSexualActivity":"Other Data",
  "HKCategoryTypeIdentifierHandwashingEvent":"Other Data",

  "HKQuantityTypeIdentifierOxygenSaturation":"Respiratory",
  "HKQuantityTypeIdentifierInhalerUsage":"Respiratory",
  "HKQuantityTypeIdentifierRespiratoryRate":"Respiratory",
  "HKQuantityTypeIdentifierForcedExpiratoryVolume1":"Respiratory",
  "HKQuantityTypeIdentifierForcedVitalCapacity":"Respiratory",
  "HKQuantityTypeIdentifierSixMinuteWalkTestDistance":"Respiratory",
  "HKQuantityTypeIdentifierPeakExpiratoryFlowRate":"Respiratory",

  "HKCategoryTypeIdentifierSleepAnalysis":"Sleep",

  "HKCategoryTypeIdentifierAppetiteChanges":"Symptoms",
  "HKCategoryTypeIdentifierAbdominalCramps":"Symptoms",
  "HKCategoryTypeIdentifierBloating":"Symptoms",
  "HKCategoryTypeIdentifierConstipation":"Symptoms",
  "HKCategoryTypeIdentifierDiarrhea":"Symptoms",
  "HKCategoryTypeIdentifierHeartburn":"Symptoms",
  "HKCategoryTypeIdentifierNausea":"Symptoms",
  "HKCategoryTypeIdentifierVomiting":"Symptoms",
  "HKCategoryTypeIdentifierChills":"Symptoms",
  "HKCategoryTypeIdentifierDizziness":"Symptoms",
  "HKCategoryTypeIdentifierFainting":"Symptoms",
  "HKCategoryTypeIdentifierFatigue":"Symptoms",
  "HKCategoryTypeIdentifierFever":"Symptoms",
  "HKCategoryTypeIdentifierGeneralizedBodyAche":"Symptoms",
  "HKCategoryTypeIdentifierHotFlashes":"Symptoms",
  "HKCategoryTypeIdentifierChestTightnessOrPain":"Symptoms",
  "HKCategoryTypeIdentifierCoughing":"Symptoms",
  "HKCategoryTypeIdentifierRapidPoundingOrFlutteringHeartbeat":"Symptoms",
  "HKCategoryTypeIdentifierShortnessOfBreath":"Symptoms",
  "HKCategoryTypeIdentifierSkippedHeartbeat":"Symptoms",
  "HKCategoryTypeIdentifierWheezing":"Symptoms",
  "HKCategoryTypeIdentifierLowerBackPain":"Symptoms",
  "HKCategoryTypeIdentifierHeadache":"Symptoms",
  "HKCategoryTypeIdentifierMemoryLapse":"Symptoms",
  "HKCategoryTypeIdentifierMoodChanges":"Symptoms",
  "HKCategoryTypeIdentifierLossOfSmell":"Symptoms",
  "HKCategoryTypeIdentifierLossOfTaste":"Symptoms",
  "HKCategoryTypeIdentifierRunnyNose":"Symptoms",
  "HKCategoryTypeIdentifierSoreThroat":"Symptoms",
  "HKCategoryTypeIdentifierSinusCongestion":"Symptoms",
  "HKCategoryTypeIdentifierBreastPain":"Symptoms",
  "HKCategoryTypeIdentifierPelvicPain":"Symptoms",
  "HKCategoryTypeIdentifierVaginalDryness":"Symptoms",
  "HKCategoryTypeIdentifierAcne":"Symptoms",
  "HKCategoryTypeIdentifierDrySkin":"Symptoms",
  "HKCategoryTypeIdentifierHairLoss":"Symptoms",
  "HKCategoryTypeIdentifierNightSweats":"Symptoms",
  "HKCategoryTypeIdentifierSleepChanges":"Symptoms",
  "HKCategoryTypeIdentifierBladderIncontinence":"Symptoms",

  "HKQuantityTypeIdentifierOxygenSaturation":"Vitals",
  "HKQuantityTypeIdentifierBasalBodyTemperature":"Vitals",
  "HKQuantityTypeIdentifierBloodPressureSystolic":"Vitals",
  "HKQuantityTypeIdentifierBloodPressureDiastolic":"Vitals",
  "HKQuantityTypeIdentifierBloodGlucose":"Vitals",
  "HKQuantityTypeIdentifierMenstrualFlow":"Vitals",
}