module HarvestTypes

  HarvestType.create!(harvest_name: "almonds",
  seasonal_status: "oos,oos,oos,oos,oos,oos,oos,available,available,available,available,oos",
  classification: "nut",
  description: "Nearly all the almonds grown in the US are farmed in California. Almonds are California’s third leading agricultural product and were its top agricultural export in 2008. ",
  image_url: "https://cuesa.org/sites/default/files/styles/article_feature_image_600/public/Almonds.JPG?itok=RAKtRfEK")

  HarvestType.create!(harvest_name: "chestnuts",
  seasonal_status: "oos,oos,oos,oos,oos,oos,oos,oos,available,oos,oos,oos",
  classification: "nut",
  description: "While most people associate chestnuts with a cracking fire and the warmth of the holiday season, they are highly nutritious and versatile nuts that can be enjoyed in a variety of dishes throughout the late winter and early spring.",
  image_url: "https://cuesa.org/sites/default/files/styles/article_feature_image_600/public/Chestnuts.JPG?itok=nNxP5BZ3")

  HarvestType.create!(harvest_name: "pecans",
  seasonal_status: "oos,oos,oos,oos,oos,oos,oos,oos,oos,available,oos,oos",
  classification: "nut",
  description: "For most, it’s difficult to imagine Thanksgiving without a rich and buttery slice of pecan pie. Traced as far back as the sixteenth century, the pecan is the only tree nut that grows naturally in North America. A patriotic nut of sorts, the pecan tree was planted in the gardens of both George Washington and Thomas Jefferson. ",
  image_url: "https://cuesa.org/sites/default/files/styles/article_feature_image_600/public/pecans_orangewood_14.jpg?itok=kBUSiJ_p")

  HarvestType.create!(harvest_name: "pistachios",
  seasonal_status: "oos,oos,oos,oos,oos,oos,oos,oos,available,available,available,oos",
  classification: "nut",
  description: "Known for their unique green color, pistachios add a distinctive flavor to dishes both savory and sweet. Native to Iran and Iraq and dating back as early as 6750 BC, pistachios were first brought to the US in the early 1800s as a garden tree and grown commercially in California starting in 1929. California is the largest producer of pistachios with the Central Valley home to over 100,000 acres of orchards. ",
  image_url: "https://cuesa.org/sites/default/files/styles/article_feature_image_600/public/pistachios_14.JPG?itok=QBuwe9f8")

  HarvestType.create!(harvest_name: "walnuts",
  seasonal_status: "oos,oos,oos,oos,oos,oos,oos,oos,oos,available,oos,oos",
  classification: "nut",
  description: "Walnuts are the oldest nut known to man, dating back as far as 10,000 BC. Excellent chopped, toasted, or glazed, the walnut, with its rich and satisfying flavor, lends itself just as easily into a roasted beet and goat cheese salad as it does into a dark chocolate brownie. In ancient times, walnuts were a symbol of the intellect, as the intricate convolutions and shape of the nut resembles that of a brain. At that time, however, no one knew that walnuts were actually one of the healthiest natural brain foods in existence. Because of the high levels of omega-3 fatty acids in the walnut, studies prove that this nutrient-dense food can actually improve brain function, promoting fluidity in brain cell membranes and increasing their ability to transmit signals to one another. In addition to being a brain-healthy food, walnuts also contain higher levels of cancer-fighting antioxidants than any other edible nut.",
  image_url: "https://cuesa.org/sites/default/files/styles/article_feature_image_600/public/walnuts_22.jpg?itok=xf2FMWas")

end