// exerciseData.js
export const exercises = [
  {
    id: 1,
    title: "Barbell Bench Press",
    image: require('../assets/exercise_icon_gifs/barbell_bench_press.gif'),
    muscles: ["Chest"],
    equipment: "Barbell",
  },
  {
    id: 2,
    title: "Dumbbell Bench Press",
    image: require('../assets/exercise_icon_gifs/dumbbell_bench_press.gif'),
    muscles: ["Chest"],
    equipment: ["Dumbbell"],
  },
  {
    id: 3,
    title: "Incline Dumbbell Bench Press",
    image: require('../assets/exercise_icon_gifs/incline_dumbbell_bench_press.gif'),
    muscles: ["Chest", "Shoulders"],
    equipment: ["Dumbbell"],
  },
  {
    id: 4,
    title: "Incline Barbell Bench Press",
    image: require('../assets/exercise_icon_gifs/incline_barbell_bench_press.gif'),
    muscles: ["Chest", "Shoulders"],
    equipment: ["Barbell"],
  },
  {
    id: 5,
    title: "Machine Chest Fly",
    image: require('../assets/exercise_icon_gifs/machine_chest_fly.gif'),
    muscles: ["Chest"],
    equipment: ["Machine"],
  },
  {
    id: 6,
    title: "Cable Crossovers",
    image: require('../assets/exercise_icon_gifs/cable_crossover.gif'),
    muscles: ["Chest"],
    equipment: ["Barbell"],
  },
  {
    id: 7,
    title: "Decline Cable Crossovers",
    image: require('../assets/exercise_icon_gifs/decline_cable_crossover.gif'),
    muscles: ["Chest"],
    equipment: ["Barbell"],
  },
  {
    id: 8,
    title: "Dips",
    image: require('../assets/exercise_icon_gifs/dips.gif'),
    muscles: ["Chest", "Triceps"],
    equipment: ["Bodyweight"],
  },
  {
    id: 9,
    title: "Dumbbell Seated Shoulder Press",
    image: require('../assets/exercise_icon_gifs/dumbbell_seated_shoulder_press.gif'),
    muscles: ["Shoulders"],
    equipment: "Dumbbell",
  },
  {
    id: 10,
    title: "Dumbbell Standing Shoulder Press",
    image: require('../assets/exercise_icon_gifs/dumbbell_standing_shoulder_press.gif'),
    muscles: ["Shoulders"],
    equipment: "Dumbbell",
  },
  {
    id: 11,
    title: "Barbell Overhead Press",
    image: require('../assets/exercise_icon_gifs/barbell_overhead_press.gif'),
    muscles: ["Shoulders"],
    equipment: ["Barbell"],
  },
  {
    id: 12,
    title: "Machine Overhead Press",
    image: require('../assets/exercise_icon_gifs/machine_overhead_press.gif'),
    muscles: ["Shoulders"],
    equipment: ["Machine"],
  },
  // {
  //   id: 13,
  //   title: "Standing Dumbbell Arnold Press",
  //   image: require('../assets/exercise_icon_gifs/'),
  //   muscles: ["Shoulders"],
  //   equipment: ["Dumbbell"],
  // },
  {
    id: 14,
    title: "Seated Dumbbell Arnold Press",
    image: require('../assets/exercise_icon_gifs/dumbbell_seated_arnold_press.gif'),
    muscles: ["Shoulders"],
    equipment: ["Dumbbell"],
  },
  {
    id: 15,
    title: "Dumbbell Lateral Raises",
    image: require('../assets/exercise_icon_gifs/dumbbell_lateral_raises.gif'),
    muscles: ["Shoulders"],
    equipment: ["Dumbbell"],
  },
  {
    id: 16,
    title: "Dumbbell One-Arm Row",
    image: require('../assets/exercise_icon_gifs/dumbbell_one_arm_row.gif'),
    muscles: ["Middle Back"],
    equipment: ["Dumbbell"],
  },
  {
    id: 17,
    title: "Dumbbell Row",
    image: require('../assets/exercise_icon_gifs/dumbbell_row.gif'),
    muscles: ["Middle Back"],
    equipment: ["Dumbbell"],
  },
  {
    id: 18,
    title: "Reverse Pec Deck",
    image: require('../assets/exercise_icon_gifs/reverse_pec_deck.gif'),
    muscles: ["Rear Delts"],
    equipment: ["Machine"],
  },
  {
    id: 19,
    title: "Machine Lat Pulldown",
    image: require('../assets/exercise_icon_gifs/machine_lat_pulldown.gif'),
    muscles: ["Chest"],
    equipment: ["Machine", "Cable"],
  },
  {
    id: 20,
    title: "Pull-Up",
    image: require('../assets/exercise_icon_gifs/pull_up.gif'),
    muscles: ["Lats", "Biceps"],
    equipment: ["Bodyweight"],
  },
  {
    id: 21,
    title: "Chin-Ups",
    image: require('../assets/exercise_icon_gifs/chin_up.gif'),
    muscles: ["Lats", "Biceps"],
    equipment: ["Bodyweight"],
  },
  {
    id: 22,
    title: "Machine Seated Cable Row",
    image: require('../assets/exercise_icon_gifs/machine_seated_cable_row.gif'),
    muscles: ["Middle Back"],
    equipment: ["Machine", "Cable"],
  },
  {
    id: 23,
    title: "Dumbbell Bicep Curl",
    image: require('../assets/exercise_icon_gifs/dumbbell_bicep_curl.gif'),
    muscles: ["Biceps"],
    equipment: ["Dumbbell"],
  },
  {
    id: 24,
    title: "Barbell Bicep Curl",
    image: require('../assets/exercise_icon_gifs/barbell_curl.gif'),
    muscles: ["Biceps"],
    equipment: ["Barbell"],
  },
  {
    id: 25,
    title: "Barbell Preacher Bicep Curl",
    image: require('../assets/exercise_icon_gifs/preacher_curls.gif'),
    muscles: ["Biceps"],
    equipment: ["Barbell"],
  },
  {
    id: 26,
    title: "Close-Grip Barbell Bicep Curl",
    image: require('../assets/exercise_icon_gifs/close_grip_barbell_curl.gif'),
    muscles: ["Biceps"],
    equipment: ["Barbell"],
  },
  {
    id: 27,
    title: "Cable Bar Pushdow",
    image: require('../assets/exercise_icon_gifs/cable_bar_pushdown.gif'),
    muscles: ["Triceps"],
    equipment: ["Cable"],
  },
  {
    id: 28,
    title: "Dumbbell Shrugs",
    image: require('../assets/exercise_icon_gifs/dumbbell_shrugs.gif'),
    muscles: ["Traps"],
    equipment: ["Dumbbell"],
  },
  {
    id: 29,
    title: "Barbell Shrugs",
    image: require('../assets/exercise_icon_gifs/barbell_shrug.gif'),
    muscles: ["Traps"],
    equipment: ["Barbell"],
  },
  {
    id: 30,
    title: "Barbell Back Squat",
    image: require('../assets/exercise_icon_gifs/barbell_squat.gif'),
    muscles: ["Quadriceps", "Core", "Hamstrings", "Glutes", "Calves"],
    equipment: ["Barbell"],
  },
  {
    id: 31,
    title: "Barbell Front Squat",
    image: require('../assets/exercise_icon_gifs/barbell_front_squat.gif'),
    muscles: ["Quadriceps", "Core", "Hamstrings", "Glutes", "Calves"],
    equipment: ["Barbell"],
  },
  {
    id: 32,
    title: "Dumbbell Bulgarian Split Squat",
    image: require('../assets/exercise_icon_gifs/dumbbell_split_squat.gif'),
    muscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves", "Core"],
    equipment: ["Dumbbell"],
  },
  {
    id: 33,
    title: "Barbell Hip Thrust",
    image: require('../assets/exercise_icon_gifs/barbell_hip_thrust.gif'),
    muscles: ["Glutes", "Core", "Hamstrings", "Calves"],
    equipment: ["Barbell"],
  },
  {
    id: 34,
    title: "Machine Leg Press",
    image: require('../assets/exercise_icon_gifs/machine_leg_press.gif'),
    muscles: ["Quadriceps", "Glutes"],
    equipment: ["Machine"],
  },
  {
    id: 35,
    title: "Seated Calf Press",
    image: require('../assets/exercise_icon_gifs/seated_calf_press.gif'),
    muscles: ["Calves"],
    equipment: ["Machine"],
  },
  {
    id: 36,
    title: "Machine Leg Extension",
    image: require('../assets/exercise_icon_gifs/machine_leg_extension.gif'),
    muscles: ["Quadriceps"],
    equipment: ["Machine"],
  },
  {
    id: 37,
    title: "Machine Hamstring Curl",
    image: require('../assets/exercise_icon_gifs/machine_hamstring_curl.gif'),
    muscles: ["Hamstrings"],
    equipment: ["Machine"],
  },
  {
    id: 38,
    title: "Machine Single-Leg Hamstring Curl",
    image: require('../assets/exercise_icon_gifs/machine_single_leg_hamstring_curl.gif'),
    muscles: ["Hamstrings"],
    equipment: ["Machine"],
  },
  {
    id: 39,
    title: "Barbell Stiff Leg Deadlift",
    image: require('../assets/exercise_icon_gifs/barbell_stiff_leg_deadlift.gif'),
    muscles: ["Hamstrings", "Glutes", "Lower Back"],
    equipment: ["Barbell"],
  },
  {
    id: 40,
    title: "Dumbbell Farmers Walk",
    image: require('../assets/exercise_icon_gifs/dumbbell_farmers_walk.gif'),
    muscles: ["Core", "Forearms", "Traps"],
    equipment: ["Kettlebell"],
  },
  // {
  //   id: 39,
  //   title: "Kettlebell Single Arm Farmers Walk",
  //   image: require('../assets/exercise_icon_gifs/.gif'),
  //   muscles: ["Core", "Forearms", "Traps"],
  //   equipment: ["Kettlebell"],
  // },
  // {
  //   id: 40,
  //   title: "Dumbbell Single Arm Farmers Walk",
  //   image: require('../assets/exercise_icon_gifs/.gif'),
  //   muscles: ["Core", "Forearms", "Traps"],
  //   equipment: ["Dumbbell"],
  // },
  {
    id: 41,
    title: "Kneeling Cable Crunch",
    image: require('../assets/exercise_icon_gifs/kneeling_cable_crunch.gif'),
    muscles: ["Core"],
    equipment: ["Cable", "Machine"],
  },
  {
    id: 42,
    title: "Crunch Machine",
    image: require('../assets/exercise_icon_gifs/crunch_machine.gif'),
    muscles: ["Core"],
    equipment: ["Cable", "Machine"],
  },
  {
    id: 43,
    title: "Leg Raise",
    image: require('../assets/exercise_icon_gifs/leg_raise.gif'),
    muscles: ["Core"],
    equipment: ["Bodyweight"],
  },
  {
    id: 44,
    title: "Face Pull",
    image: require('../assets/exercise_icon_gifs/face_pulls.gif'),
    muscles: ["Read Delts"],
    equipment: ["Machine", "Cable"],
  },
  {
    id: 45,
    title: "Stationary Bike",
    image: require('../assets/exercise_icon_gifs/stationary_bike.gif'),
    muscles: [""],
    equipment: ["Cardio"],
  },
  {
    id: 46,
    title: "Stair Climbing Machine",
    image: require('../assets/exercise_icon_gifs/stair_climbing_machine.gif'),
    muscles: [""],
    equipment: ["Cardio"],
  },
  {
    id: 47,
    title: "Treadmill",
    image: require('../assets/exercise_icon_gifs/treadmill.gif'),
    muscles: [""],
    equipment: ["Cardio"],
  },
  {
    id: 48,
    title: "Eliptical Machine",
    image: require('../assets/exercise_icon_gifs/eliptical_machine.gif'),
    muscles: [""],
    equipment: ["Cardio"],
  },
  {
    id: 49,
    title: "Rowing Machine",
    image: require('../assets/exercise_icon_gifs/rowing_machine.gif'),
    muscles: [""],
    equipment: ["Cardio"],
  },
];
