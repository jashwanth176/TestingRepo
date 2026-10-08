import json
import os
import collections


def load_settings(path):
    with open(path, encoding="utf-8") as handle:
        return json.load(handle)


def summarize(values):
    return collections.Counter(values)


def format_summary(values):
    counts = summarize(values)
    return json.dumps(counts, sort_keys=True)


def workspace_name():
    return os.path.basename(os.getcwd())
