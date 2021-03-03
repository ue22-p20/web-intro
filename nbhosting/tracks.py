"""
This module is for nbhosting
"""

from nbhosting.courses import (
    Track, Section, notebooks_by_patterns)

def tracks(coursedir):
    """
    coursedir is a CourseDir object that points
    at the root directory of the filesystem tree
    that holds notebooks

    result is a list of Track instances
    """
    track_specs = [
        ("course #1: HTML", "basic contents with HTML and some CSS", 'html',
          [
            ("introduction", "notebooks/0*.md"),
            ("HTML basics", "notebooks/1*.md"),
          ]),
        ("course #2: CSS layout", "advanced layout with CSS", 'css',
          [
            ("quiz", "quiz/1-html.md"),
            ("layout with CSS",  "notebooks/2*.md"),
          ]),
         ("course #3: JS basics", "programming with JS", "js",
           [
#             ("old intro to JS", "notebooks/3*.md"),
             ("intro to JS", "notebooks/new*.md"),
             ("optional content", "notebooks/5*.md"),
           ]),
         ("quiz final", "quiz final", "quiz",
          [
            ("quiz JS", "quiz/3-js.md"),
          ]),
    ]

    return [Track(coursedir,
                [Section(coursedir=coursedir,
                        name=section_name,
                        notebooks=notebooks_by_patterns(
                            coursedir, patterns))
                for section_name, *patterns in section_specs],
                name=track_name,
                description=track_description,
                id=track_id)
        for (track_name, track_description, track_id, section_specs) in track_specs]

