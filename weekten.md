## Tutorial: Talking to Your Computer

Due to the hurricane, this week offers a simplified but condensed version of two weeks worth of exercises: I highly recommend completing both weeks of *Code to Joy* chapters before starting, as that framework will be helpful for thinking about the type of "programming" we're doing when we use the natural language input of a text prompt interface to develop code. This process extends the provocation at the end of week eight's exercise to think about how this type of interface offers us a way into our datasets. This week, you'll be building a simple, structured dataset, then deploying it as part of a simple website. You should not need to edit any code directly - instead, you'll be following my prompt model and rewriting it to, as Julia Evans describes in ["So You Want to be a Wizard"](https://wizardzines.com/zines/wizard/), "take on hard projects" through experimentation. 

### Prompts for Making a Simple Recommendation Site

These are the prompts I used to build [the sample project for this week](/ranker/), which offers a very simple, Buzzfeed-esque, recommendation system based on user rankings of science fiction books. The exact prompts I used for every stage, including debugging the final output, are included here. Modify these prompts to follow your own path and build a similar site - or, if you have more experience, feel free to diverge more significantly from this path and try something harder!

I recommend selecting the **ChatGPT 4.0 with Canvas** model for this task, as this will make it easier to watch the HTML file evolve as you iterate through the prompts. Your process should produce two files: a .json dataset, and a .html file. In order to test these, you will need to upload them to GitHub Pages - that process is described at the end. (This would have been a separate exercise, so if you feel overwhelmed, reference this week's video - this includes a detailed walkthrough of every step!)

1.  **Initial Dataset Creation**

    -   *Prompt*: \"Create a list of 100 important works of science
        fiction. Each entry should include the title, author, year, and
        one genre from the following: Afrofuturism, Apocalyptic and
        post-apocalyptic fiction, Biopunk, Cyberpunk, Dying Earth,
        Feminist science fiction, Military science fiction, Social
        science fiction, Space opera, Steampunk.\"

    -   *Suggested Modifications*: Try creating a dataset with different
        genres or media types (e.g., films, games, or TV shows) to
        explore how recommendations change based on the type of content. Be specific in the set of options for genre or an equivalent sorting mechanism, as that will be critical to counting user preferences later.

2.  **Converting the List to JSON**

    -   *Prompt*: \"Take the list of 100 important works of science
        fiction and convert it into a JSON file, structured with each
        book\'s title, author, year, and genre.\"

    -   *Suggested Modifications*: Experiment with using different or potentially more complex categories, but make sure to verify the output in text before doing the conversion to JSON. If you are new to this type of work, I suggest sticking to one simple category. 

3.  **Displaying Books for User Rating**

    -   *Prompt*: \"Create an HTML page with script and style embedded that takes the JSON file as
        input, selects 10 books at random, and displays them with radio
        buttons for users to rate them from 1 to 5 or select \'Haven\'t
        read it\'.\"

    -   *Suggested Modifications*: Display one book at a time, allowing
        users to decide when to stop. Alternatively, add a feature where
        users can skip books they are not interested in. However, if you add these sorts of features, keep them in mind when asking for the new code.

4.  **Tracking Genre Preferences**

    -   *Prompt*: \"Add JavaScript functions to the HTML to handle user
        ratings. Track which genres the user has rated 3 or better, and
        count those preferences.\"

    -   *Suggested Modifications*: Modify the tracking to include the
        number of books rated highly within each genre. You could also
        explore tracking other aspects like average rating per genre.

5.  **Displaying Top Genre Preferences**

    -   *Prompt*: \"After the user submits their ratings, display the
        top three genres based on the ratings they provided.\"

    -   *Suggested Modifications*: Instead of just displaying the top
        three genres, visualize the genre preferences using a bar chart
        or pie chart to make it more engaging.

6.  **Generating Book Recommendations**

    -   *Prompt*: \"Based on the user\'s top three genres, recommend
        three books, one from each genre. Ensure these books are not
        from the set that the user has already rated.\"

    -   *Suggested Modifications*: Allow users to choose how many
        recommendations they want. You could also give users the option
        to filter recommendations by year or author.

7.  **Allowing Additional Ratings**

    -   *Prompt*: \"Provide an option for users to rate ten more books
        to refine their recommendations. Update the genre counts
        cumulatively, and ensure books previously rated are excluded
        from the new set.\"

    -   *Suggested Modifications*: Let users choose whether they want to
        rate more books or proceed with the recommendations they already
        have. You could also add a progress bar to show how many books
        have been rated.

8.  **Setting Display and Style Updates**

    -   *Prompt*: \"Make the page theme retro science fiction-themed,
        with styles and colors appropriate for that vibe. Update the
        page title to \'Sci Fi Book Finder\', and limit the book display
        area width to a max of 1000px.\"

    -   *Suggested Modifications*: Experiment with different visual
        themes that fit your dataset. You could also add
        animations or background music, but I don't recommend the additional complexity if you haven't built something like this before.

9.  **Debugging Genre Preferences and Recommendations**

    -   *Prompt*: \"Debug the genre preference tracking to ensure the
        correct genres are identified as top preferences. Ensure that
        the recommendations are based strictly on books that have not
        been rated yet and only select books from the top-rated
        genres.\"

    -   *Suggested Modifications*: This step is for after you've uploaded and started to test your system - if you aren't getting the results you are looking for, try breaking down the problem and iterating until it works. I recommend testing the code at every step of this process.

10. **Creating a GitHub Repository and Setting Up the Project**

    -   **Steps**:

        1.  **Create a GitHub Repository**: Open GitHub Desktop and
            click on \"File \> New Repository\". Fill in the necessary
            details like the repository name, description, and local
            path. Click \"Create Repository\".

        2.  **Open the Repository in Visual Studio Code**: Once the
            repository is created, click \"Open in Visual Studio Code\"
            in GitHub Desktop. This will allow you to start editing
            files in VS Code.

        3.  **Save the JSON File to the Repository Folder**: Copy the JSON data file you generated earlier and paste
            it into the repository folder. Check the file in VS Code to confirm.

        4.  **Create an HTML File**: In the same repository folder,
            create a new file called index.html. This file will be used
            to hold the output for displaying book recommendations and
            handling user ratings. Copy and paste your final recommendation system code. You might need to replace it multiple times to get everything to work, using the debugging process discussed above.

        5.  **Commit and Push Changes**: Go back to GitHub Desktop, and
            you should see the new files you created. Write a commit
            message like \"Add JSON dataset and HTML file\" and click
            \"Commit to main\". Then click \"Push origin\" to upload
            your changes to GitHub.

        6.  **Initialize GitHub Pages**: Go to your repository on
            GitHub.com. Click on the \"Settings\" tab, scroll down to
            the \"GitHub Pages\" section, and select the branch you want
            to use (usually main or master). Then select the root folder
            for the source. Save the settings, and GitHub will provide a
            link to view your site live.

### Reflection

This week, you'll be sharing the link to your version of the recommendations system, and thinking through the relationship of what you've made to our readings from both *Algorithms of Oppression* and *Code to Joy.* What types of expertise went into each stage of building this interactive object? What assumptions or errors do you see in the JSON dataset you've produced? Consider how this type of simple recommendation system speaks to the larger world of algorithmic influences that both Littman and Noble speak to.