days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

meals = ["Breakfast", "Lunch", "Dinner"]

1.times do
  user = User.create(
    # NEED TO CHANGE EMAIL
    email: "bobsharp@gmail.com",
    password: "password",
    created_at: "2021-07-15 02:34:45.128640",
    updated_at: "2021-07-15 02:34:45.128640"
  )
  5.times do

      # user = User.create(
      #   password = password,
      #   email: Faker::Internet.email
      # )

      plan = Plan.create(
        week_day: days.sample,
        meal: meals.sample,
        theme: Faker::Nation.nationality,
        user_id: 1
      )

      3.times do
          recipe = Recipe.create( 
          title: Faker::Food.dish,
          description: Faker::Food.description,
          serving: Faker::Number.between(from: 1, to: 10),
          plan_id: plan.id
        )

        2.times do
          Ingred.create(
              food: Faker::Food.ingredient,
              measurement: Faker::Food.measurement,
              calories: Faker::Address.building_number,
              recipe_id: recipe.id
          )
        end
      end
  end
end

  puts "Data seeded"