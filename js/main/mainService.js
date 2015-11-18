app.service('mainService', function() {
	var workoutArray = [
		{
		Name: "3/4 Sit-Up",
		Equipment: " Body Only",
		Level: " Beginner",
		Muscle: " Abdominals",
		Description: "Lie down on the floor and secure your feet. Your legs should be bent at the knees. Place your hands behind or to the side of your head. You will begin with your back on the ground. This will be your starting position. Flex your hips and spine to raise your torso toward your knees. At the top of the contraction your torso should be perpendicular to the ground. Reverse the motion, going only Â¾ of the way down. Repeat for the recommended amount of repetitions. ",
		Pic: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/2001/Male/l/2001_1.jpg"
		},
		{
		Name: "90/90 Hamstring",
		Equipment: " Body Only",
		Level: " Beginner",
		Muscle: " Hamstrings",
		Description: "Lie on your back, with one leg extended straight out. With the other leg, bend the hip and knee to 90 degrees. You may brace your leg with your hands if necessary. This will be your starting position. Extend your leg straight into the air, pausing briefly at the top. Return the leg to the starting position. Repeat for 10-20 repetitions, and then switch to the other leg. ",
		Pic: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/578/Male/l/578_1.jpg"
		},
		{
		Name: "Ab Crunch Machine",
		Equipment: " Machine",
		Level: " Intermediate",
		Muscle: " Abdominals",
		Description: "Select a light resistance and sit down on the ab machine placing your feet under the pads provided and grabbing the top handles. Your arms should be bent at a 90 degree angle as you rest the triceps on the pads provided. This will be your starting position. At the same time, begin to lift the legs up as you crunch your upper torso. Breathe out as you perform this movement. Tip: Be sure to use a slow and controlled motion. Concentrate on using your abs to move the weight while relaxing your legs and feet. After a second pause, slowly return to the starting position as you breathe in. Repeat the movement for the prescribed amount of repetitions. ",
		Pic: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/225/Male/l/225_1.jpg"
		},
		{
		Name: "Ab Roller",
		Equipment: " Other",
		Level: " Intermediate",
		Muscle: " Abdominals",
		Description: "Hold the Ab Roller with both hands and kneel on the floor. Now place the ab roller on the floor in front of you so that you are on all your hands and knees (as in a kneeling push up position). This will be your starting position. Slowly roll the ab roller straight forward, stretching your body into a straight position. Tip: Go down as far as you can without touching the floor with your body. Breathe in during this portion of the movement. After a pause at the stretched position, start pulling yourself back to the starting position as you breathe out. Tip: Go slowly and keep your abs tight at all times. ",
		Pic: "http://www.bodybuilding.com/exercises/exerciseImages/sequences/110/Male/l/110_1.jpg"
		}
	]

	this.getWorkout = function(numToReturn) {
		return workoutArray[parseInt(Math.random() * workoutArray.length)]
	}
})