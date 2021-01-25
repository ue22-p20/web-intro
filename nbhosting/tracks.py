"""
This module is for nbhosting
"""

from nbhosting.courses import (
    Track, Section, Notebook,
    notebooks_by_pattern, track_by_directory)

def tracks(coursedir):
    return [
        Track(
            coursedir,
            name="course #1: HTML",
            sections=[
                Section(name="introduction",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/0*.md"))
                Section(name="HTML basics",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/1*.md")),
            ],
            description="basic contents with HTML and some CSS"),
        Track(
            coursedir,
            name="course #2: CSS layout",
            sections=[
                Section(name="layout with CSS",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/2*.md")),
                ],
            description="advanced layout with CSS"),
        Track(
            coursedir,
            name="course #3: JS basics",
                Section(name="intro to JS",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/3*.md")),
                ],
              description="programming with JS"),
        Track(coursedir,
              name="optional content",
              sections=[
                Section(name="optional tools",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/[56]*.md")),
                Section(name="course requirements",
                        coursedir=coursedir,
                        notebooks=notebooks_by_pattern(coursedir,"notebooks/7*.md")),
                ],
              description="more tools, and course requirements"),
        ]
