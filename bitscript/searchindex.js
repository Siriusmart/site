Object.assign(window.search, {
  doc_urls: [
    "overview.html#overview",
    "overview.html#use-case",
    "overview.html#roadmap",
    "quickstart.html#quick-start",
    "syntax/syntax.html#syntax",
    "syntax/display.html#hello-world",
    "syntax/display.html#debug",
    "syntax/display.html#display",
    "syntax/variables.html#variables",
    "syntax/variables.html#declare",
    "syntax/variables.html#assigning-to-variables",
    "syntax/variables.html#displaying-variables",
    "syntax/gates.html#gates",
    "syntax/gates.html#short-hand-expression",
    "syntax/input.html#input",
    "syntax/casting.html#casting",
    "syntax/casting.html#input-casting",
    "syntax/casting.html#output-casting",
    "syntax/casting.html#assign-casting",
    "bitr.html#commands",
    "bitr.html#repl",
    "bitr.html#run-file",
    "bitr.html#informational",
    "changelog.html#changelog",
    "changelog.html#v010",
    "changelog.html#added",
    "contributing.html#contributing",
    "contributing.html#examples",
    "contributing.html#docs",
    "contributing.html#adding-featuresfixing-bugs",
  ],
  index: {
    documentStore: {
      docInfo: {
        0: { body: 31, breadcrumbs: 2, title: 1 },
        1: { body: 31, breadcrumbs: 3, title: 2 },
        10: { body: 53, breadcrumbs: 4, title: 2 },
        11: { body: 29, breadcrumbs: 4, title: 2 },
        12: { body: 36, breadcrumbs: 3, title: 1 },
        13: { body: 95, breadcrumbs: 5, title: 3 },
        14: { body: 27, breadcrumbs: 3, title: 1 },
        15: { body: 18, breadcrumbs: 3, title: 1 },
        16: { body: 33, breadcrumbs: 4, title: 2 },
        17: { body: 12, breadcrumbs: 4, title: 2 },
        18: { body: 18, breadcrumbs: 4, title: 2 },
        19: { body: 0, breadcrumbs: 2, title: 1 },
        2: { body: 34, breadcrumbs: 2, title: 1 },
        20: { body: 16, breadcrumbs: 2, title: 1 },
        21: { body: 22, breadcrumbs: 3, title: 2 },
        22: { body: 17, breadcrumbs: 2, title: 1 },
        23: { body: 0, breadcrumbs: 2, title: 1 },
        24: { body: 0, breadcrumbs: 2, title: 1 },
        25: { body: 2, breadcrumbs: 2, title: 1 },
        26: { body: 8, breadcrumbs: 2, title: 1 },
        27: { body: 12, breadcrumbs: 2, title: 1 },
        28: { body: 17, breadcrumbs: 2, title: 1 },
        29: { body: 23, breadcrumbs: 4, title: 3 },
        3: { body: 21, breadcrumbs: 4, title: 2 },
        4: { body: 14, breadcrumbs: 2, title: 1 },
        5: { body: 25, breadcrumbs: 4, title: 2 },
        6: { body: 21, breadcrumbs: 3, title: 1 },
        7: { body: 30, breadcrumbs: 3, title: 1 },
        8: { body: 8, breadcrumbs: 3, title: 1 },
        9: { body: 32, breadcrumbs: 3, title: 1 },
      },
      docs: {
        0: {
          body: "BitScript is like pseudocode to logic gates , similar to how pseudocode is to logic. It can be used to test series of logic gates, as it closely mimics how logic gates work . Bitr is a minimal BitScript interpreter written in Rust, it does not include any external dependencies. (Stands for bit-runner , is pronounced as bitter .)",
          breadcrumbs: "Overview » Overview",
          id: "0",
          title: "Overview",
        },
        1: {
          body: "Designing and testing logic gate systems are usually done on paper or with obscure softwares that often looks like a toy, both of which are far from ideal. BitScript is an interpreted language for designing logic gates , makes testing and sharing designs a lot easier. Examples of what you can do with BitScript can be found in examples.",
          breadcrumbs: "Overview » Use case",
          id: "1",
          title: "Use case",
        },
        10: {
          body: "Variables can be displayed as a whole , individual cells or ranges . first_var = another_var # sets first_var to 1111\nfirst_var[0] = 0 # sets the least significant bit to 0, first_var is now 1110\nfirst_var[2..4] = 00 # sets the 2-3rd least significant bit to 00, first_var is now 0010\nfirst_var[..] = 0 # ranges can be unbounded, in this case it sets first_var to 0000 Variables can also be used as index for another variable, for example. first_var[..DEN(11)] = another_var[1..] # denary of `11` is 3\nfirst_var[AND(1, 0)] = 2",
          breadcrumbs: "Syntax » Variables » Assigning to variables",
          id: "10",
          title: "Assigning to variables",
        },
        11: {
          body: "In the same sense that it is assigned, it can be displayed the same way with dbg and disp. dbg another_var # 0000\ndbg another_var[0] # 0\ndbg another_var[NOT(0)..] # 000 disp another_var is {another_var}\ndisp the least significant bit of another_var is {another_var[0]}\ndisp the other 3 bits are {another_var[NOT(0)..]}",
          breadcrumbs: "Syntax » Variables » Displaying variables",
          id: "11",
          title: "Displaying variables",
        },
        12: {
          body: "Logic gates are the only way to process variables in BitScript, and that's the entire point. dbg NOT(0) # 1\ndbg AND(1, 0) # 0\ndbg OR(1, 0) # 1\ndbg NOR(1, 0) # 0\ndbg NAND(1, 0) # 1\ndbg XOR(1, 0) # 1\ndbg XNOR(1, 0) # 0",
          breadcrumbs: "Syntax » Gates » Gates",
          id: "12",
          title: "Gates",
        },
        13: {
          body: "dbg NOT(1101) # 0010, same as NOT(1, 1, 0, 1)\ndbg AND(1101) # 0, same as AND(1, AND(1, AND(0, 1)))\ndbg OR(1101) # 1, same as OR(1, OR(1, OR(0, 1)))\ndbg NOR(1101) # 0, same as NOR(1, NOR(1, NOR(0, 1)))\ndbg NAND(1101) # 1, same as NAND(1, NAND(1, NAND(0, 1)))\ndbg XOR(1101) # 1, same as XOR(1, XOR(1, XOR(0, 1)))\ndbg XNOR(1101) # 0, same as XNOR(1, XNOR(1, XNOR(0, 1))) Single values, whole arrays, and ranges can be used in gates. In conclusion, this is how each gate behaves. Gate Behavior NOT Flips all bits to its opposite. AND Only returns 1 if all bits are 1. OR Returns 1 if any of the bit is 1. NOR NOT(OR) NAND NOT(AND) XOR Returns 1 if there is an odd number of 1s. XNOR Returns 1 if there is an even number of 1s.",
          breadcrumbs: "Syntax » Gates » Short hand expression",
          id: "13",
          title: "Short hand expression",
        },
        14: {
          body: "BitScript can take input from stdin. dclr user_input 4 disp 'Enter a 4 bit number: '\ninpt user_input\ndisp You have entered: {user_input} In this example, if the user enters 1011, then the program will tell the user that he entered 1011. Simple as that.",
          breadcrumbs: "Syntax » Input » Input",
          id: "14",
          title: "Input",
        },
        15: {
          body: "Since there is only one datatype in BitScript, casting isn't really a thing. However, what is a possible is accepting inputs of octal, denary, and hexidecimal numbers. And opposite to that - displaying variables in that format.",
          breadcrumbs: "Syntax » Casting » Casting",
          id: "15",
          title: "Casting",
        },
        16: {
          body: "dclr store 0 # decalre a dummy variable inpt store # now accepting only binary numbers\ninpt o store # now accepting only octal numbers\ninpt d store # now accepting only denary numbers\ninpt h store # now accepting only hexidecimal numbers",
          breadcrumbs: "Syntax » Casting » Input casting",
          id: "16",
          title: "Input casting",
        },
        17: {
          body: "dbg 1100 # 1100\ndbg OCT(1100) # 14\ndbg DEN(1100) # 12\ndbg HEX(1100) # C",
          breadcrumbs: "Syntax » Casting » Output casting",
          id: "17",
          title: "Output casting",
        },
        18: {
          body: "dclr store 0 store = 1100 # 1100\nstore =o 14 # 1100\nstore =d 12 # 1100\nstore =h C # 1100",
          breadcrumbs: "Syntax » Casting » Assign casting",
          id: "18",
          title: "Assign casting",
        },
        19: {
          body: "",
          breadcrumbs: "Commands » Commands",
          id: "19",
          title: "Commands",
        },
        2: {
          body: "Assigning values to a single cell, whole array and range or cells. Common logic gates. Input with base 8, 10 and 16 numbers. Goto, label, and if statements. Reusable components. Unicode characters from binary. Browser interpreter with Web Assembly. Convery BitScript into a diagram of logic gates.",
          breadcrumbs: "Overview » Roadmap",
          id: "2",
          title: "Roadmap",
        },
        20: {
          body: "Running bitr without any arguments will start the repl, all variables declared in the repl will be remembered until the repl ends. bitr # launches the repl",
          breadcrumbs: "Commands » Repl",
          id: "20",
          title: "Repl",
        },
        21: {
          body: "To run a file, put the file name (with or without .bs extension) as the first argument. bitr [file name].bs # runs [file name].bs\nbitr [file name] # the `.bs` extension is not required",
          breadcrumbs: "Commands » Run file",
          id: "21",
          title: "Run file",
        },
        22: {
          body: "Informational commands prints out information and does nothing else. bitr help # displays the help message\nbitr version # displays the version of bitr installed",
          breadcrumbs: "Commands » Informational",
          id: "22",
          title: "Informational",
        },
        23: {
          body: "",
          breadcrumbs: "Changelog » Changelog",
          id: "23",
          title: "Changelog",
        },
        24: {
          body: "",
          breadcrumbs: "Changelog » v0.1.0",
          id: "24",
          title: "v0.1.0",
        },
        25: {
          body: "Initial commit",
          breadcrumbs: "Changelog » Added",
          id: "25",
          title: "Added",
        },
        26: {
          body: "If you are able and like the project so far, consider contributing through one of the following ways.",
          breadcrumbs: "Contributing » Contributing",
          id: "26",
          title: "Contributing",
        },
        27: {
          body: "Add your code to examples, for that you can either create a pull request or contact me through any ways (e.g. open an issue).",
          breadcrumbs: "Contributing » Examples",
          id: "27",
          title: "Examples",
        },
        28: {
          body: "If you've noticed any undocumented behavior that seems resonable, you can either open a pull request with the docs edited, or contact me . If you think it's a bug, open an issue.",
          breadcrumbs: "Contributing » Docs",
          id: "28",
          title: "Docs",
        },
        29: {
          body: "If you somehow managed to understand my code, it would be great if you can add features/fix bugs in Bitr. Open a pull request if you do. Your code should generate no warnings with cargo clippy , unless there are strong reasons to write it not according to clippy.",
          breadcrumbs: "Contributing » Adding features/fixing bugs",
          id: "29",
          title: "Adding features/fixing bugs",
        },
        3: {
          body: "Install bitr from crates.io using the command below, or download a prebuilt binary. Make sure cargo is present in your system. cargo install bitr To confirm it is installed, run bitr.",
          breadcrumbs: "Quick start » Quick start",
          id: "3",
          title: "Quick start",
        },
        4: {
          body: "This section is the guide to writing BitScript. It also act as the documentation of BitScript, so if you are just searching for a specific syntax, use the search button above.",
          breadcrumbs: "Syntax » Syntax",
          id: "4",
          title: "Syntax",
        },
        5: {
          body: 'To display the text "Hello world", create a file hello_world.bs. # hello_world.bs # this is a comment disp Hello world\\n # disp [string] Save the file and run bitr display. Alternatively, you can run it in the repl, start the repl with bitr.',
          breadcrumbs: "Syntax » Display » Hello world",
          id: "5",
          title: "Hello world",
        },
        6: {
          body: "dbg display values with no formatting. dbg 1 # 1\ndbg AND(1, 0) # 0\ndbg NOT(11001101) # 00110010\ndbg DEN(1111) # 15, DEN for denary (base 10)",
          breadcrumbs: "Syntax » Display » Debug",
          id: "6",
          title: "Debug",
        },
        7: {
          body: "disp display strings with formatting arguments. Use singe quotes ('') to preserve leading/trailing spaces, and curly braces ({}) for values. disp This is a string.\\n # This is a string.\ndisp 'Enter a value: ' # Enter a value: disp 1 and 1 is {AND(1, 1)} # 1 and 1 is 1",
          breadcrumbs: "Syntax » Display » Display",
          id: "7",
          title: "Display",
        },
        8: {
          body: "There are no data types in BitScript, because all data are stored in 1d array of bits .",
          breadcrumbs: "Syntax » Variables » Variables",
          id: "8",
          title: "Variables",
        },
        9: {
          body: "dclr is used declare variables, the size (length) of variables cannot be changed once created, and variable names can only contain alphabet and underscores . dclr first_var 4 # creates a variable of length 4\ndclr another_var 4 1 # creates a variable of length 4, initialise it with 1s",
          breadcrumbs: "Syntax » Variables » Declare",
          id: "9",
          title: "Declare",
        },
      },
      length: 30,
      save: true,
    },
    fields: ["title", "body", "breadcrumbs"],
    index: {
      body: {
        root: {
          0: {
            0: {
              0: {
                0: { df: 2, docs: { 10: { tf: 1.0 }, 11: { tf: 1.0 } } },
                df: 1,
                docs: { 11: { tf: 1.0 } },
              },
              1: {
                0: { df: 2, docs: { 10: { tf: 1.0 }, 13: { tf: 1.0 } } },
                1: {
                  0: {
                    0: {
                      1: {
                        0: { df: 1, docs: { 6: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 1,
              docs: { 10: { tf: 1.4142135623730951 } },
            },
            df: 7,
            docs: {
              10: { tf: 2.0 },
              11: { tf: 1.0 },
              12: { tf: 3.0 },
              13: { tf: 2.0 },
              16: { tf: 1.0 },
              18: { tf: 1.0 },
              6: { tf: 1.4142135623730951 },
            },
          },
          1: {
            0: {
              1: {
                1: { df: 1, docs: { 14: { tf: 1.4142135623730951 } } },
                df: 0,
                docs: {},
              },
              df: 2,
              docs: { 2: { tf: 1.0 }, 6: { tf: 1.0 } },
            },
            1: {
              0: {
                0: {
                  df: 2,
                  docs: {
                    17: { tf: 1.4142135623730951 },
                    18: { tf: 2.23606797749979 },
                  },
                },
                df: 0,
                docs: {},
              },
              1: {
                0: { df: 1, docs: { 10: { tf: 1.0 } } },
                1: { df: 1, docs: { 10: { tf: 1.0 } } },
                df: 0,
                docs: {},
              },
              df: 1,
              docs: { 10: { tf: 1.0 } },
            },
            2: { df: 2, docs: { 17: { tf: 1.0 }, 18: { tf: 1.0 } } },
            4: { df: 2, docs: { 17: { tf: 1.0 }, 18: { tf: 1.0 } } },
            5: { df: 1, docs: { 6: { tf: 1.0 } } },
            6: { df: 1, docs: { 2: { tf: 1.0 } } },
            d: { df: 1, docs: { 8: { tf: 1.0 } } },
            df: 5,
            docs: {
              12: { tf: 2.0 },
              13: { tf: 4.123105625617661 },
              6: { tf: 1.4142135623730951 },
              7: { tf: 2.449489742783178 },
              9: { tf: 1.0 },
            },
            s: {
              df: 2,
              docs: { 13: { tf: 1.4142135623730951 }, 9: { tf: 1.0 } },
            },
          },
          2: { df: 1, docs: { 10: { tf: 1.4142135623730951 } } },
          3: {
            df: 2,
            docs: { 10: { tf: 1.0 }, 11: { tf: 1.0 } },
            r: { d: { df: 1, docs: { 10: { tf: 1.0 } } }, df: 0, docs: {} },
          },
          4: {
            df: 2,
            docs: { 14: { tf: 1.4142135623730951 }, 9: { tf: 2.0 } },
          },
          8: { df: 1, docs: { 2: { tf: 1.0 } } },
          a: {
            b: {
              df: 0,
              docs: {},
              o: { df: 0, docs: {}, v: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            c: {
              c: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    t: { df: 2, docs: { 15: { tf: 1.0 }, 16: { tf: 2.0 } } },
                  },
                },
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    d: { df: 1, docs: { 29: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
              df: 0,
              docs: {},
              t: { df: 1, docs: { 4: { tf: 1.0 } } },
            },
            d: {
              d: { df: 2, docs: { 27: { tf: 1.0 }, 29: { tf: 1.0 } } },
              df: 2,
              docs: { 25: { tf: 1.0 }, 29: { tf: 1.0 } },
            },
            df: 0,
            docs: {},
            l: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                h: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        t: { df: 1, docs: { 9: { tf: 1.0 } } },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 5: { tf: 1.0 } } },
                  },
                },
              },
            },
            n: {
              d: {
                "(": {
                  0: { df: 1, docs: { 13: { tf: 1.0 } } },
                  1: {
                    1: {
                      0: {
                        1: { df: 1, docs: { 13: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 4,
                    docs: {
                      12: { tf: 1.0 },
                      13: { tf: 1.4142135623730951 },
                      6: { tf: 1.0 },
                      7: { tf: 1.0 },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  h: {
                    df: 1,
                    docs: { 10: { tf: 1.0 } },
                    e: {
                      df: 0,
                      docs: {},
                      r: {
                        _: {
                          df: 0,
                          docs: {},
                          v: {
                            a: {
                              df: 0,
                              docs: {},
                              r: {
                                "[": {
                                  0: {
                                    df: 1,
                                    docs: { 11: { tf: 1.4142135623730951 } },
                                  },
                                  1: { df: 1, docs: { 10: { tf: 1.0 } } },
                                  df: 0,
                                  docs: {},
                                  n: {
                                    df: 0,
                                    docs: {},
                                    o: {
                                      df: 0,
                                      docs: {},
                                      t: {
                                        "(": {
                                          0: {
                                            df: 1,
                                            docs: {
                                              11: { tf: 1.4142135623730951 },
                                            },
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                        df: 0,
                                        docs: {},
                                      },
                                    },
                                  },
                                },
                                df: 3,
                                docs: {
                                  10: { tf: 1.0 },
                                  11: { tf: 2.0 },
                                  9: { tf: 1.0 },
                                },
                              },
                            },
                            df: 0,
                            docs: {},
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              g: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  m: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        t: {
                          df: 3,
                          docs: {
                            20: { tf: 1.0 },
                            21: { tf: 1.0 },
                            7: { tf: 1.0 },
                          },
                        },
                      },
                    },
                  },
                },
              },
              r: {
                a: {
                  df: 0,
                  docs: {},
                  y: {
                    df: 3,
                    docs: { 13: { tf: 1.0 }, 2: { tf: 1.0 }, 8: { tf: 1.0 } },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            s: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  m: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                i: {
                  df: 0,
                  docs: {},
                  g: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 4,
                      docs: {
                        10: { tf: 1.0 },
                        11: { tf: 1.0 },
                        18: { tf: 1.0 },
                        2: { tf: 1.0 },
                      },
                    },
                  },
                },
              },
            },
          },
          b: {
            a: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                e: { df: 2, docs: { 2: { tf: 1.0 }, 6: { tf: 1.0 } } },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              h: {
                a: {
                  df: 0,
                  docs: {},
                  v: {
                    df: 1,
                    docs: { 13: { tf: 1.0 } },
                    i: {
                      df: 0,
                      docs: {},
                      o: {
                        df: 0,
                        docs: {},
                        r: {
                          df: 2,
                          docs: { 13: { tf: 1.0 }, 28: { tf: 1.0 } },
                        },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
              l: {
                df: 0,
                docs: {},
                o: { df: 0, docs: {}, w: { df: 1, docs: { 3: { tf: 1.0 } } } },
              },
            },
            i: {
              df: 0,
              docs: {},
              n: {
                a: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 3,
                      docs: { 16: { tf: 1.0 }, 2: { tf: 1.0 }, 3: { tf: 1.0 } },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
              t: {
                df: 6,
                docs: {
                  0: { tf: 1.0 },
                  10: { tf: 1.4142135623730951 },
                  11: { tf: 1.4142135623730951 },
                  13: { tf: 1.7320508075688772 },
                  14: { tf: 1.0 },
                  8: { tf: 1.0 },
                },
                r: {
                  df: 7,
                  docs: {
                    0: { tf: 1.0 },
                    20: { tf: 1.4142135623730951 },
                    21: { tf: 1.4142135623730951 },
                    22: { tf: 1.7320508075688772 },
                    29: { tf: 1.0 },
                    3: { tf: 1.7320508075688772 },
                    5: { tf: 1.4142135623730951 },
                  },
                },
                s: {
                  c: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      i: {
                        df: 0,
                        docs: {},
                        p: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 8,
                            docs: {
                              0: { tf: 1.4142135623730951 },
                              1: { tf: 1.4142135623730951 },
                              12: { tf: 1.0 },
                              14: { tf: 1.0 },
                              15: { tf: 1.0 },
                              2: { tf: 1.0 },
                              4: { tf: 1.4142135623730951 },
                              8: { tf: 1.0 },
                            },
                          },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                t: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 0: { tf: 1.0 } } },
                  },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              t: { df: 0, docs: {}, h: { df: 1, docs: { 1: { tf: 1.0 } } } },
            },
            r: {
              a: {
                c: { df: 0, docs: {}, e: { df: 1, docs: { 7: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                w: {
                  df: 0,
                  docs: {},
                  s: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      r: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            s: { df: 1, docs: { 21: { tf: 1.4142135623730951 } } },
            u: {
              df: 0,
              docs: {},
              g: {
                df: 2,
                docs: { 28: { tf: 1.0 }, 29: { tf: 1.4142135623730951 } },
              },
              t: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          c: {
            a: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 2,
                    docs: { 29: { tf: 1.0 }, 3: { tf: 1.4142135623730951 } },
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                e: { df: 2, docs: { 1: { tf: 1.0 }, 10: { tf: 1.0 } } },
                t: {
                  df: 4,
                  docs: {
                    15: { tf: 1.4142135623730951 },
                    16: { tf: 1.0 },
                    17: { tf: 1.0 },
                    18: { tf: 1.0 },
                  },
                },
              },
            },
            df: 2,
            docs: { 17: { tf: 1.0 }, 18: { tf: 1.0 } },
            e: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  df: 2,
                  docs: { 10: { tf: 1.0 }, 2: { tf: 1.4142135623730951 } },
                },
              },
            },
            h: {
              a: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  g: {
                    df: 1,
                    docs: { 9: { tf: 1.0 } },
                    e: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          g: { df: 1, docs: { 23: { tf: 1.0 } } },
                        },
                      },
                    },
                  },
                },
                r: {
                  a: {
                    c: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
            },
            l: {
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    i: { df: 1, docs: { 29: { tf: 1.4142135623730951 } } },
                  },
                },
              },
              o: {
                df: 0,
                docs: {},
                s: { df: 0, docs: {}, e: { df: 1, docs: { 0: { tf: 1.0 } } } },
              },
            },
            o: {
              d: {
                df: 0,
                docs: {},
                e: {
                  df: 2,
                  docs: { 27: { tf: 1.0 }, 29: { tf: 1.4142135623730951 } },
                },
              },
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                m: {
                  a: {
                    df: 0,
                    docs: {},
                    n: {
                      d: {
                        df: 3,
                        docs: {
                          19: { tf: 1.0 },
                          22: { tf: 1.0 },
                          3: { tf: 1.0 },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 5: { tf: 1.0 } } },
                    },
                  },
                  i: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 25: { tf: 1.0 } } },
                  },
                  o: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 2: { tf: 1.0 } } },
                  },
                },
                p: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 2: { tf: 1.0 } } },
                  },
                },
              },
              n: {
                c: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    u: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 13: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
                f: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 3: { tf: 1.0 } } },
                    },
                  },
                },
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    d: { df: 1, docs: { 26: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
                t: {
                  a: {
                    c: {
                      df: 0,
                      docs: {},
                      t: { df: 2, docs: { 27: { tf: 1.0 }, 28: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 9: { tf: 1.0 } } },
                    },
                  },
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    i: {
                      b: {
                        df: 0,
                        docs: {},
                        u: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 1,
                            docs: { 26: { tf: 1.4142135623730951 } },
                          },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
                v: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      i: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            r: {
              a: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      ".": {
                        df: 0,
                        docs: {},
                        i: {
                          df: 0,
                          docs: {},
                          o: { df: 1, docs: { 3: { tf: 1.0 } } },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              e: {
                a: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 3,
                    docs: {
                      27: { tf: 1.0 },
                      5: { tf: 1.0 },
                      9: { tf: 1.7320508075688772 },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            u: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                l: { df: 0, docs: {}, i: { df: 1, docs: { 7: { tf: 1.0 } } } },
              },
            },
          },
          d: {
            a: {
              df: 0,
              docs: {},
              t: {
                a: {
                  df: 1,
                  docs: { 8: { tf: 1.4142135623730951 } },
                  t: {
                    df: 0,
                    docs: {},
                    y: {
                      df: 0,
                      docs: {},
                      p: { df: 1, docs: { 15: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            b: {
              df: 0,
              docs: {},
              g: {
                df: 5,
                docs: {
                  11: { tf: 2.0 },
                  12: { tf: 2.6457513110645907 },
                  13: { tf: 2.6457513110645907 },
                  17: { tf: 2.0 },
                  6: { tf: 2.23606797749979 },
                },
              },
            },
            c: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                r: {
                  df: 4,
                  docs: {
                    14: { tf: 1.0 },
                    16: { tf: 1.0 },
                    18: { tf: 1.0 },
                    9: { tf: 1.7320508075688772 },
                  },
                },
              },
            },
            df: 2,
            docs: { 16: { tf: 1.0 }, 18: { tf: 1.0 } },
            e: {
              b: {
                df: 0,
                docs: {},
                u: { df: 0, docs: {}, g: { df: 1, docs: { 6: { tf: 1.0 } } } },
              },
              c: {
                a: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 16: { tf: 1.0 } } },
                  },
                },
                df: 0,
                docs: {},
                l: {
                  a: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 2,
                      docs: { 20: { tf: 1.0 }, 9: { tf: 1.4142135623730951 } },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
              n: {
                "(": {
                  1: {
                    1: {
                      0: {
                        0: { df: 1, docs: { 17: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      1: {
                        1: { df: 1, docs: { 6: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                a: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 4,
                      docs: {
                        10: { tf: 1.0 },
                        15: { tf: 1.0 },
                        16: { tf: 1.0 },
                        6: { tf: 1.0 },
                      },
                    },
                  },
                },
                df: 1,
                docs: { 6: { tf: 1.0 } },
              },
              p: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  n: {
                    d: { df: 1, docs: { 0: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  g: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 1: { tf: 1.7320508075688772 } } },
                  },
                },
              },
            },
            i: {
              a: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  r: {
                    a: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                p: {
                  df: 4,
                  docs: {
                    11: { tf: 2.0 },
                    14: { tf: 1.4142135623730951 },
                    5: { tf: 1.4142135623730951 },
                    7: { tf: 2.0 },
                  },
                  l: {
                    a: {
                      df: 0,
                      docs: {},
                      y: {
                        df: 7,
                        docs: {
                          10: { tf: 1.0 },
                          11: { tf: 1.4142135623730951 },
                          15: { tf: 1.0 },
                          22: { tf: 1.4142135623730951 },
                          5: { tf: 1.4142135623730951 },
                          6: { tf: 1.0 },
                          7: { tf: 1.4142135623730951 },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            o: {
              c: {
                df: 1,
                docs: { 28: { tf: 1.4142135623730951 } },
                u: {
                  df: 0,
                  docs: {},
                  m: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        t: { df: 1, docs: { 4: { tf: 1.0 } } },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              n: { df: 0, docs: {}, e: { df: 1, docs: { 1: { tf: 1.0 } } } },
              w: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    o: {
                      a: {
                        d: { df: 1, docs: { 3: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                m: { df: 0, docs: {}, i: { df: 1, docs: { 16: { tf: 1.0 } } } },
              },
            },
          },
          df: 0,
          docs: {},
          e: {
            ".": { df: 0, docs: {}, g: { df: 1, docs: { 27: { tf: 1.0 } } } },
            a: {
              c: { df: 0, docs: {}, h: { df: 1, docs: { 13: { tf: 1.0 } } } },
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 1: { tf: 1.0 } } },
                  },
                },
              },
            },
            d: {
              df: 0,
              docs: {},
              i: { df: 0, docs: {}, t: { df: 1, docs: { 28: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            n: {
              d: { df: 1, docs: { 20: { tf: 1.0 } } },
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 2,
                    docs: { 14: { tf: 2.0 }, 7: { tf: 1.4142135623730951 } },
                  },
                },
                i: { df: 0, docs: {}, r: { df: 1, docs: { 12: { tf: 1.0 } } } },
              },
            },
            v: {
              df: 0,
              docs: {},
              e: { df: 0, docs: {}, n: { df: 1, docs: { 13: { tf: 1.0 } } } },
            },
            x: {
              a: {
                df: 0,
                docs: {},
                m: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 4,
                      docs: {
                        1: { tf: 1.4142135623730951 },
                        10: { tf: 1.0 },
                        14: { tf: 1.0 },
                        27: { tf: 1.4142135623730951 },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 13: { tf: 1.0 } } },
                    },
                  },
                },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    s: { df: 1, docs: { 21: { tf: 1.4142135623730951 } } },
                  },
                  r: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 0: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          f: {
            a: {
              df: 0,
              docs: {},
              r: { df: 2, docs: { 1: { tf: 1.0 }, 26: { tf: 1.0 } } },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        s: {
                          "/": {
                            df: 0,
                            docs: {},
                            f: {
                              df: 0,
                              docs: {},
                              i: {
                                df: 0,
                                docs: {},
                                x: {
                                  df: 1,
                                  docs: { 29: { tf: 1.4142135623730951 } },
                                },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            i: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                e: {
                  df: 2,
                  docs: {
                    21: { tf: 2.449489742783178 },
                    5: { tf: 1.4142135623730951 },
                  },
                },
              },
              r: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  t: {
                    _: {
                      df: 0,
                      docs: {},
                      v: {
                        a: {
                          df: 0,
                          docs: {},
                          r: {
                            "[": {
                              ".": {
                                ".": {
                                  d: {
                                    df: 0,
                                    docs: {},
                                    e: {
                                      df: 0,
                                      docs: {},
                                      n: {
                                        "(": {
                                          1: {
                                            1: {
                                              df: 1,
                                              docs: { 10: { tf: 1.0 } },
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                        df: 0,
                                        docs: {},
                                      },
                                    },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                                df: 0,
                                docs: {},
                              },
                              0: { df: 1, docs: { 10: { tf: 1.0 } } },
                              2: {
                                ".": {
                                  ".": {
                                    4: { df: 1, docs: { 10: { tf: 1.0 } } },
                                    df: 0,
                                    docs: {},
                                  },
                                  df: 0,
                                  docs: {},
                                },
                                df: 0,
                                docs: {},
                              },
                              a: {
                                df: 0,
                                docs: {},
                                n: {
                                  d: {
                                    "(": {
                                      1: { df: 1, docs: { 10: { tf: 1.0 } } },
                                      df: 0,
                                      docs: {},
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                  df: 0,
                                  docs: {},
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 2,
                            docs: {
                              10: { tf: 2.449489742783178 },
                              9: { tf: 1.0 },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                    df: 1,
                    docs: { 21: { tf: 1.0 } },
                  },
                },
              },
            },
            l: {
              df: 0,
              docs: {},
              i: { df: 0, docs: {}, p: { df: 1, docs: { 13: { tf: 1.0 } } } },
            },
            o: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    w: { df: 1, docs: { 26: { tf: 1.0 } } },
                  },
                },
              },
              r: {
                df: 0,
                docs: {},
                m: {
                  a: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 3,
                      docs: { 15: { tf: 1.0 }, 6: { tf: 1.0 }, 7: { tf: 1.0 } },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              u: {
                df: 0,
                docs: {},
                n: { d: { df: 1, docs: { 1: { tf: 1.0 } } }, df: 0, docs: {} },
              },
            },
          },
          g: {
            a: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 5,
                  docs: {
                    0: { tf: 1.7320508075688772 },
                    1: { tf: 1.4142135623730951 },
                    12: { tf: 1.4142135623730951 },
                    13: { tf: 1.7320508075688772 },
                    2: { tf: 1.4142135623730951 },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, r: { df: 1, docs: { 29: { tf: 1.0 } } } },
              },
            },
            o: {
              df: 0,
              docs: {},
              t: { df: 0, docs: {}, o: { df: 1, docs: { 2: { tf: 1.0 } } } },
            },
            r: {
              df: 0,
              docs: {},
              e: {
                a: { df: 0, docs: {}, t: { df: 1, docs: { 29: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
            u: {
              df: 0,
              docs: {},
              i: { d: { df: 1, docs: { 4: { tf: 1.0 } } }, df: 0, docs: {} },
            },
          },
          h: {
            a: {
              df: 0,
              docs: {},
              n: { d: { df: 1, docs: { 13: { tf: 1.0 } } }, df: 0, docs: {} },
            },
            df: 2,
            docs: { 16: { tf: 1.0 }, 18: { tf: 1.0 } },
            e: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  o: {
                    _: {
                      df: 0,
                      docs: {},
                      w: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          r: {
                            df: 0,
                            docs: {},
                            l: {
                              d: {
                                ".": {
                                  b: {
                                    df: 1,
                                    docs: { 5: { tf: 1.4142135623730951 } },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                                df: 0,
                                docs: {},
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                      },
                    },
                    df: 1,
                    docs: { 5: { tf: 1.7320508075688772 } },
                  },
                },
                p: { df: 1, docs: { 22: { tf: 1.4142135623730951 } } },
              },
              x: {
                "(": {
                  1: {
                    1: {
                      0: {
                        0: { df: 1, docs: { 17: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
                i: {
                  d: {
                    df: 0,
                    docs: {},
                    e: {
                      c: {
                        df: 0,
                        docs: {},
                        i: {
                          df: 0,
                          docs: {},
                          m: {
                            df: 2,
                            docs: { 15: { tf: 1.0 }, 16: { tf: 1.0 } },
                          },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
          },
          i: {
            d: {
              df: 0,
              docs: {},
              e: {
                a: { df: 0, docs: {}, l: { df: 1, docs: { 1: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
            df: 0,
            docs: {},
            n: {
              c: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  u: {
                    d: { df: 1, docs: { 0: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
              d: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, x: { df: 1, docs: { 10: { tf: 1.0 } } } },
                i: {
                  df: 0,
                  docs: {},
                  v: {
                    df: 0,
                    docs: {},
                    i: {
                      d: {
                        df: 0,
                        docs: {},
                        u: { df: 1, docs: { 10: { tf: 1.0 } } },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    m: { df: 1, docs: { 22: { tf: 1.7320508075688772 } } },
                  },
                },
              },
              i: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  i: {
                    a: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        i: {
                          df: 0,
                          docs: {},
                          s: { df: 1, docs: { 9: { tf: 1.0 } } },
                        },
                      },
                    },
                    df: 1,
                    docs: { 25: { tf: 1.0 } },
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                t: { df: 2, docs: { 14: { tf: 1.0 }, 16: { tf: 2.0 } } },
                u: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 4,
                    docs: {
                      14: { tf: 1.4142135623730951 },
                      15: { tf: 1.0 },
                      16: { tf: 1.0 },
                      2: { tf: 1.0 },
                    },
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 2,
                      docs: { 22: { tf: 1.0 }, 3: { tf: 1.7320508075688772 } },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    p: {
                      df: 0,
                      docs: {},
                      r: {
                        df: 0,
                        docs: {},
                        e: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 3,
                            docs: {
                              0: { tf: 1.0 },
                              1: { tf: 1.0 },
                              2: { tf: 1.0 },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            s: {
              df: 0,
              docs: {},
              n: {
                "'": {
                  df: 0,
                  docs: {},
                  t: { df: 1, docs: { 15: { tf: 1.0 } } },
                },
                df: 0,
                docs: {},
              },
              s: {
                df: 0,
                docs: {},
                u: { df: 2, docs: { 27: { tf: 1.0 }, 28: { tf: 1.0 } } },
              },
            },
            t: { "'": { df: 1, docs: { 28: { tf: 1.0 } } }, df: 0, docs: {} },
          },
          l: {
            a: {
              b: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, l: { df: 1, docs: { 2: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  u: {
                    a: {
                      df: 0,
                      docs: {},
                      g: { df: 1, docs: { 1: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
              u: {
                df: 0,
                docs: {},
                n: {
                  c: {
                    df: 0,
                    docs: {},
                    h: { df: 1, docs: { 20: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                d: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      g: {
                        "/": {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            r: {
                              a: {
                                df: 0,
                                docs: {},
                                i: {
                                  df: 0,
                                  docs: {},
                                  l: { df: 1, docs: { 7: { tf: 1.0 } } },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    h: { df: 1, docs: { 9: { tf: 1.7320508075688772 } } },
                  },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              g: {
                df: 0,
                docs: {},
                i: {
                  c: {
                    df: 4,
                    docs: {
                      0: { tf: 2.0 },
                      1: { tf: 1.4142135623730951 },
                      12: { tf: 1.0 },
                      2: { tf: 1.4142135623730951 },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              o: { df: 0, docs: {}, k: { df: 1, docs: { 1: { tf: 1.0 } } } },
              t: { df: 1, docs: { 1: { tf: 1.0 } } },
            },
          },
          m: {
            a: {
              df: 0,
              docs: {},
              k: {
                df: 0,
                docs: {},
                e: { df: 2, docs: { 1: { tf: 1.0 }, 3: { tf: 1.0 } } },
              },
              n: {
                a: { df: 0, docs: {}, g: { df: 1, docs: { 29: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                s: {
                  a: {
                    df: 0,
                    docs: {},
                    g: { df: 1, docs: { 22: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                i: { c: { df: 1, docs: { 0: { tf: 1.0 } } }, df: 0, docs: {} },
              },
              n: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, m: { df: 1, docs: { 0: { tf: 1.0 } } } },
              },
            },
          },
          n: {
            a: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                e: {
                  "]": {
                    ".": {
                      b: { df: 1, docs: { 21: { tf: 1.4142135623730951 } } },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 2,
                  docs: { 21: { tf: 1.4142135623730951 }, 9: { tf: 1.0 } },
                },
              },
              n: {
                d: {
                  "(": {
                    0: { df: 1, docs: { 13: { tf: 1.0 } } },
                    1: {
                      1: {
                        0: {
                          1: { df: 1, docs: { 13: { tf: 1.0 } } },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 2,
                      docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 1,
                  docs: { 13: { tf: 1.0 } },
                },
                df: 0,
                docs: {},
              },
            },
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              r: {
                "(": {
                  0: { df: 1, docs: { 13: { tf: 1.0 } } },
                  1: {
                    1: {
                      0: {
                        1: { df: 1, docs: { 13: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 2,
                    docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              t: {
                "(": {
                  0: { df: 1, docs: { 12: { tf: 1.0 } } },
                  1: {
                    1: {
                      0: {
                        0: {
                          1: {
                            1: {
                              0: {
                                1: { df: 1, docs: { 6: { tf: 1.0 } } },
                                df: 0,
                                docs: {},
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                        1: { df: 1, docs: { 13: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 1,
                    docs: { 13: { tf: 1.0 } },
                  },
                  a: {
                    df: 0,
                    docs: {},
                    n: {
                      d: { df: 1, docs: { 13: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 13: { tf: 1.0 } } },
                  },
                },
                df: 0,
                docs: {},
                h: { df: 1, docs: { 22: { tf: 1.0 } } },
                i: { c: { df: 1, docs: { 28: { tf: 1.0 } } }, df: 0, docs: {} },
              },
              w: {
                df: 2,
                docs: { 10: { tf: 1.4142135623730951 }, 16: { tf: 2.0 } },
              },
            },
            u: {
              df: 0,
              docs: {},
              m: {
                b: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 5,
                      docs: {
                        13: { tf: 1.4142135623730951 },
                        14: { tf: 1.0 },
                        15: { tf: 1.0 },
                        16: { tf: 2.0 },
                        2: { tf: 1.0 },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          o: {
            b: {
              df: 0,
              docs: {},
              s: {
                c: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 1: { tf: 1.0 } } },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            c: {
              df: 0,
              docs: {},
              t: {
                "(": {
                  1: {
                    1: {
                      0: {
                        0: { df: 1, docs: { 17: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                a: {
                  df: 0,
                  docs: {},
                  l: { df: 2, docs: { 15: { tf: 1.0 }, 16: { tf: 1.0 } } },
                },
                df: 0,
                docs: {},
              },
            },
            d: { d: { df: 1, docs: { 13: { tf: 1.0 } } }, df: 0, docs: {} },
            df: 2,
            docs: { 16: { tf: 1.0 }, 18: { tf: 1.0 } },
            n: {
              c: { df: 1, docs: { 9: { tf: 1.0 } } },
              df: 2,
              docs: { 15: { tf: 1.0 }, 26: { tf: 1.0 } },
            },
            p: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                n: {
                  df: 3,
                  docs: {
                    27: { tf: 1.0 },
                    28: { tf: 1.4142135623730951 },
                    29: { tf: 1.0 },
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  s: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      t: { df: 2, docs: { 13: { tf: 1.0 }, 15: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            r: {
              "(": {
                0: { df: 1, docs: { 13: { tf: 1.0 } } },
                1: {
                  1: {
                    0: {
                      1: { df: 1, docs: { 13: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 2,
                  docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            u: {
              df: 0,
              docs: {},
              t: {
                df: 1,
                docs: { 22: { tf: 1.0 } },
                p: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 17: { tf: 1.0 } } },
                  },
                },
              },
            },
            v: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  v: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        w: { df: 1, docs: { 0: { tf: 1.0 } } },
                      },
                    },
                  },
                },
              },
            },
          },
          p: {
            a: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, r: { df: 1, docs: { 1: { tf: 1.0 } } } },
              },
            },
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                n: { df: 0, docs: {}, t: { df: 1, docs: { 12: { tf: 1.0 } } } },
              },
              s: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 15: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              e: {
                b: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        t: { df: 1, docs: { 3: { tf: 1.0 } } },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 3: { tf: 1.0 } } },
                    },
                    r: {
                      df: 0,
                      docs: {},
                      v: { df: 1, docs: { 7: { tf: 1.0 } } },
                    },
                  },
                },
              },
              i: {
                df: 0,
                docs: {},
                n: { df: 0, docs: {}, t: { df: 1, docs: { 22: { tf: 1.0 } } } },
              },
              o: {
                c: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 12: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  r: {
                    a: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 14: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                j: {
                  df: 0,
                  docs: {},
                  e: {
                    c: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 26: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                n: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    u: {
                      df: 0,
                      docs: {},
                      n: {
                        c: { df: 1, docs: { 0: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
              },
            },
            s: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                u: {
                  d: {
                    df: 0,
                    docs: {},
                    o: {
                      c: {
                        df: 0,
                        docs: {},
                        o: {
                          d: { df: 1, docs: { 0: { tf: 1.4142135623730951 } } },
                          df: 0,
                          docs: {},
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  df: 3,
                  docs: { 27: { tf: 1.0 }, 28: { tf: 1.0 }, 29: { tf: 1.0 } },
                },
              },
              t: { df: 1, docs: { 21: { tf: 1.0 } } },
            },
          },
          q: {
            df: 0,
            docs: {},
            u: {
              df: 0,
              docs: {},
              i: {
                c: { df: 0, docs: {}, k: { df: 1, docs: { 3: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
              o: { df: 0, docs: {}, t: { df: 1, docs: { 7: { tf: 1.0 } } } },
            },
          },
          r: {
            a: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                g: {
                  df: 3,
                  docs: {
                    10: { tf: 1.4142135623730951 },
                    13: { tf: 1.0 },
                    2: { tf: 1.0 },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    i: { df: 1, docs: { 15: { tf: 1.0 } } },
                  },
                },
                s: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 29: { tf: 1.0 } } },
                  },
                },
              },
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  m: {
                    b: { df: 1, docs: { 20: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                l: {
                  df: 2,
                  docs: {
                    20: { tf: 2.23606797749979 },
                    5: { tf: 1.4142135623730951 },
                  },
                },
              },
              q: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      t: {
                        df: 3,
                        docs: {
                          27: { tf: 1.0 },
                          28: { tf: 1.0 },
                          29: { tf: 1.0 },
                        },
                      },
                    },
                  },
                  i: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 21: { tf: 1.0 } } },
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                o: { df: 0, docs: {}, n: { df: 1, docs: { 28: { tf: 1.0 } } } },
              },
              t: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 13: { tf: 2.0 } } },
                  },
                },
              },
              u: {
                df: 0,
                docs: {},
                s: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            o: {
              a: {
                d: {
                  df: 0,
                  docs: {},
                  m: {
                    a: {
                      df: 0,
                      docs: {},
                      p: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            u: {
              df: 0,
              docs: {},
              n: {
                df: 4,
                docs: {
                  20: { tf: 1.0 },
                  21: { tf: 1.7320508075688772 },
                  3: { tf: 1.0 },
                  5: { tf: 1.4142135623730951 },
                },
                n: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 0: { tf: 1.0 } } },
                  },
                },
              },
              s: { df: 0, docs: {}, t: { df: 1, docs: { 0: { tf: 1.0 } } } },
            },
          },
          s: {
            a: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                e: {
                  df: 2,
                  docs: {
                    11: { tf: 1.4142135623730951 },
                    13: { tf: 2.6457513110645907 },
                  },
                },
              },
              v: { df: 0, docs: {}, e: { df: 1, docs: { 5: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                r: {
                  c: {
                    df: 0,
                    docs: {},
                    h: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              c: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              e: { df: 0, docs: {}, m: { df: 1, docs: { 28: { tf: 1.0 } } } },
              n: { df: 0, docs: {}, s: { df: 1, docs: { 11: { tf: 1.0 } } } },
              r: { df: 0, docs: {}, i: { df: 1, docs: { 0: { tf: 1.0 } } } },
              t: { df: 1, docs: { 10: { tf: 2.0 } } },
            },
            h: {
              a: {
                df: 0,
                docs: {},
                r: { df: 0, docs: {}, e: { df: 1, docs: { 1: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                r: { df: 0, docs: {}, t: { df: 1, docs: { 13: { tf: 1.0 } } } },
              },
            },
            i: {
              df: 0,
              docs: {},
              g: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    f: {
                      df: 0,
                      docs: {},
                      i: {
                        c: {
                          df: 2,
                          docs: {
                            10: { tf: 1.4142135623730951 },
                            11: { tf: 1.0 },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
              },
              m: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  l: {
                    a: {
                      df: 0,
                      docs: {},
                      r: { df: 1, docs: { 0: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                p: { df: 0, docs: {}, l: { df: 1, docs: { 14: { tf: 1.0 } } } },
              },
              n: {
                df: 0,
                docs: {},
                g: {
                  df: 1,
                  docs: { 7: { tf: 1.0 } },
                  l: { df: 2, docs: { 13: { tf: 1.0 }, 2: { tf: 1.0 } } },
                },
              },
              z: { df: 0, docs: {}, e: { df: 1, docs: { 9: { tf: 1.0 } } } },
            },
            o: {
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  w: {
                    a: {
                      df: 0,
                      docs: {},
                      r: { df: 1, docs: { 1: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
              m: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  h: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      w: { df: 1, docs: { 29: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            p: {
              a: {
                c: { df: 0, docs: {}, e: { df: 1, docs: { 7: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              e: {
                c: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    f: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            t: {
              a: {
                df: 0,
                docs: {},
                n: { d: { df: 1, docs: { 0: { tf: 1.0 } } }, df: 0, docs: {} },
                r: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 3,
                    docs: { 20: { tf: 1.0 }, 3: { tf: 1.0 }, 5: { tf: 1.0 } },
                  },
                },
                t: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    m: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        n: {
                          df: 0,
                          docs: {},
                          t: { df: 1, docs: { 2: { tf: 1.0 } } },
                        },
                      },
                    },
                  },
                },
              },
              d: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, n: { df: 1, docs: { 14: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 3,
                    docs: {
                      16: { tf: 2.23606797749979 },
                      18: { tf: 2.23606797749979 },
                      8: { tf: 1.0 },
                    },
                  },
                },
              },
              r: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    g: {
                      ".": {
                        "\\": {
                          df: 0,
                          docs: {},
                          n: { df: 1, docs: { 7: { tf: 1.0 } } },
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 2,
                      docs: { 5: { tf: 1.0 }, 7: { tf: 1.4142135623730951 } },
                    },
                  },
                },
                o: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    g: { df: 1, docs: { 29: { tf: 1.0 } } },
                  },
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              r: { df: 0, docs: {}, e: { df: 1, docs: { 3: { tf: 1.0 } } } },
            },
            y: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    df: 0,
                    docs: {},
                    x: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              s: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    m: { df: 2, docs: { 1: { tf: 1.0 }, 3: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          t: {
            a: {
              df: 0,
              docs: {},
              k: { df: 0, docs: {}, e: { df: 1, docs: { 14: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              l: { df: 0, docs: {}, l: { df: 1, docs: { 14: { tf: 1.0 } } } },
              s: {
                df: 0,
                docs: {},
                t: {
                  df: 2,
                  docs: { 0: { tf: 1.0 }, 1: { tf: 1.4142135623730951 } },
                },
              },
              x: { df: 0, docs: {}, t: { df: 1, docs: { 5: { tf: 1.0 } } } },
            },
            h: {
              a: {
                df: 0,
                docs: {},
                t: {
                  "'": { df: 1, docs: { 12: { tf: 1.0 } } },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  g: { df: 1, docs: { 15: { tf: 1.0 } } },
                  k: { df: 1, docs: { 28: { tf: 1.0 } } },
                },
              },
              r: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    g: {
                      df: 0,
                      docs: {},
                      h: { df: 2, docs: { 26: { tf: 1.0 }, 27: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            o: { df: 0, docs: {}, y: { df: 1, docs: { 1: { tf: 1.0 } } } },
            y: {
              df: 0,
              docs: {},
              p: { df: 0, docs: {}, e: { df: 1, docs: { 8: { tf: 1.0 } } } },
            },
          },
          u: {
            df: 0,
            docs: {},
            n: {
              b: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    n: {
                      d: { df: 1, docs: { 10: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
              d: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    s: {
                      c: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          r: { df: 1, docs: { 9: { tf: 1.0 } } },
                        },
                      },
                      df: 0,
                      docs: {},
                      t: {
                        a: {
                          df: 0,
                          docs: {},
                          n: {
                            d: { df: 1, docs: { 29: { tf: 1.0 } } },
                            df: 0,
                            docs: {},
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
                o: {
                  c: {
                    df: 0,
                    docs: {},
                    u: { df: 1, docs: { 28: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
              i: {
                c: {
                  df: 0,
                  docs: {},
                  o: {
                    d: { df: 1, docs: { 2: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
                df: 0,
                docs: {},
              },
              l: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  s: {
                    df: 0,
                    docs: {},
                    s: { df: 1, docs: { 29: { tf: 1.0 } } },
                  },
                },
              },
              t: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, l: { df: 1, docs: { 20: { tf: 1.0 } } } },
              },
            },
            s: {
              df: 8,
              docs: {
                0: { tf: 1.0 },
                1: { tf: 1.0 },
                10: { tf: 1.0 },
                13: { tf: 1.0 },
                3: { tf: 1.0 },
                4: { tf: 1.0 },
                7: { tf: 1.0 },
                9: { tf: 1.0 },
              },
              e: {
                df: 0,
                docs: {},
                r: {
                  _: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        p: {
                          df: 0,
                          docs: {},
                          u: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 1,
                              docs: { 14: { tf: 1.7320508075688772 } },
                            },
                          },
                        },
                      },
                    },
                  },
                  df: 1,
                  docs: { 14: { tf: 1.4142135623730951 } },
                },
              },
              u: {
                a: { df: 0, docs: {}, l: { df: 1, docs: { 1: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
          },
          v: {
            0: {
              ".": {
                1: {
                  ".": {
                    0: { df: 1, docs: { 24: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            a: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                u: {
                  df: 4,
                  docs: {
                    13: { tf: 1.0 },
                    2: { tf: 1.0 },
                    6: { tf: 1.0 },
                    7: { tf: 1.7320508075688772 },
                  },
                },
              },
              r: {
                df: 0,
                docs: {},
                i: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 8,
                        docs: {
                          10: { tf: 2.0 },
                          11: { tf: 1.0 },
                          12: { tf: 1.0 },
                          15: { tf: 1.0 },
                          16: { tf: 1.0 },
                          20: { tf: 1.0 },
                          8: { tf: 1.0 },
                          9: { tf: 2.23606797749979 },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 22: { tf: 1.4142135623730951 } } },
                    },
                  },
                },
              },
            },
          },
          w: {
            a: {
              df: 0,
              docs: {},
              r: { df: 0, docs: {}, n: { df: 1, docs: { 29: { tf: 1.0 } } } },
              y: {
                df: 4,
                docs: {
                  11: { tf: 1.0 },
                  12: { tf: 1.0 },
                  26: { tf: 1.0 },
                  27: { tf: 1.0 },
                },
              },
            },
            df: 0,
            docs: {},
            e: { b: { df: 1, docs: { 2: { tf: 1.0 } } }, df: 0, docs: {} },
            h: {
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 3,
                    docs: { 10: { tf: 1.0 }, 13: { tf: 1.0 }, 2: { tf: 1.0 } },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                h: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    u: {
                      df: 0,
                      docs: {},
                      t: { df: 2, docs: { 20: { tf: 1.0 }, 21: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                k: { df: 1, docs: { 0: { tf: 1.0 } } },
                l: {
                  d: {
                    "\\": {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 5: { tf: 1.0 } } },
                    },
                    df: 1,
                    docs: { 5: { tf: 1.4142135623730951 } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  e: { df: 2, docs: { 29: { tf: 1.0 }, 4: { tf: 1.0 } } },
                  t: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 0: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
          },
          x: {
            df: 0,
            docs: {},
            n: {
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                r: {
                  "(": {
                    0: { df: 1, docs: { 13: { tf: 1.0 } } },
                    1: {
                      1: {
                        0: {
                          1: { df: 1, docs: { 13: { tf: 1.0 } } },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 2,
                      docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 1,
                  docs: { 13: { tf: 1.0 } },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              r: {
                "(": {
                  0: { df: 1, docs: { 13: { tf: 1.0 } } },
                  1: {
                    1: {
                      0: {
                        1: { df: 1, docs: { 13: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 2,
                    docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                  },
                  df: 0,
                  docs: {},
                },
                df: 1,
                docs: { 13: { tf: 1.0 } },
              },
            },
          },
          y: {
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              u: {
                "'": {
                  df: 0,
                  docs: {},
                  v: { df: 1, docs: { 28: { tf: 1.0 } } },
                },
                df: 0,
                docs: {},
              },
            },
          },
        },
      },
      breadcrumbs: {
        root: {
          0: {
            0: {
              0: {
                0: { df: 2, docs: { 10: { tf: 1.0 }, 11: { tf: 1.0 } } },
                df: 1,
                docs: { 11: { tf: 1.0 } },
              },
              1: {
                0: { df: 2, docs: { 10: { tf: 1.0 }, 13: { tf: 1.0 } } },
                1: {
                  0: {
                    0: {
                      1: {
                        0: { df: 1, docs: { 6: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 1,
              docs: { 10: { tf: 1.4142135623730951 } },
            },
            df: 7,
            docs: {
              10: { tf: 2.0 },
              11: { tf: 1.0 },
              12: { tf: 3.0 },
              13: { tf: 2.0 },
              16: { tf: 1.0 },
              18: { tf: 1.0 },
              6: { tf: 1.4142135623730951 },
            },
          },
          1: {
            0: {
              1: {
                1: { df: 1, docs: { 14: { tf: 1.4142135623730951 } } },
                df: 0,
                docs: {},
              },
              df: 2,
              docs: { 2: { tf: 1.0 }, 6: { tf: 1.0 } },
            },
            1: {
              0: {
                0: {
                  df: 2,
                  docs: {
                    17: { tf: 1.4142135623730951 },
                    18: { tf: 2.23606797749979 },
                  },
                },
                df: 0,
                docs: {},
              },
              1: {
                0: { df: 1, docs: { 10: { tf: 1.0 } } },
                1: { df: 1, docs: { 10: { tf: 1.0 } } },
                df: 0,
                docs: {},
              },
              df: 1,
              docs: { 10: { tf: 1.0 } },
            },
            2: { df: 2, docs: { 17: { tf: 1.0 }, 18: { tf: 1.0 } } },
            4: { df: 2, docs: { 17: { tf: 1.0 }, 18: { tf: 1.0 } } },
            5: { df: 1, docs: { 6: { tf: 1.0 } } },
            6: { df: 1, docs: { 2: { tf: 1.0 } } },
            d: { df: 1, docs: { 8: { tf: 1.0 } } },
            df: 5,
            docs: {
              12: { tf: 2.0 },
              13: { tf: 4.123105625617661 },
              6: { tf: 1.4142135623730951 },
              7: { tf: 2.449489742783178 },
              9: { tf: 1.0 },
            },
            s: {
              df: 2,
              docs: { 13: { tf: 1.4142135623730951 }, 9: { tf: 1.0 } },
            },
          },
          2: { df: 1, docs: { 10: { tf: 1.4142135623730951 } } },
          3: {
            df: 2,
            docs: { 10: { tf: 1.0 }, 11: { tf: 1.0 } },
            r: { d: { df: 1, docs: { 10: { tf: 1.0 } } }, df: 0, docs: {} },
          },
          4: {
            df: 2,
            docs: { 14: { tf: 1.4142135623730951 }, 9: { tf: 2.0 } },
          },
          8: { df: 1, docs: { 2: { tf: 1.0 } } },
          a: {
            b: {
              df: 0,
              docs: {},
              o: { df: 0, docs: {}, v: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            c: {
              c: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    t: { df: 2, docs: { 15: { tf: 1.0 }, 16: { tf: 2.0 } } },
                  },
                },
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    d: { df: 1, docs: { 29: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
              df: 0,
              docs: {},
              t: { df: 1, docs: { 4: { tf: 1.0 } } },
            },
            d: {
              d: { df: 2, docs: { 27: { tf: 1.0 }, 29: { tf: 1.0 } } },
              df: 2,
              docs: {
                25: { tf: 1.4142135623730951 },
                29: { tf: 1.4142135623730951 },
              },
            },
            df: 0,
            docs: {},
            l: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                h: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        t: { df: 1, docs: { 9: { tf: 1.0 } } },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 5: { tf: 1.0 } } },
                  },
                },
              },
            },
            n: {
              d: {
                "(": {
                  0: { df: 1, docs: { 13: { tf: 1.0 } } },
                  1: {
                    1: {
                      0: {
                        1: { df: 1, docs: { 13: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 4,
                    docs: {
                      12: { tf: 1.0 },
                      13: { tf: 1.4142135623730951 },
                      6: { tf: 1.0 },
                      7: { tf: 1.0 },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  h: {
                    df: 1,
                    docs: { 10: { tf: 1.0 } },
                    e: {
                      df: 0,
                      docs: {},
                      r: {
                        _: {
                          df: 0,
                          docs: {},
                          v: {
                            a: {
                              df: 0,
                              docs: {},
                              r: {
                                "[": {
                                  0: {
                                    df: 1,
                                    docs: { 11: { tf: 1.4142135623730951 } },
                                  },
                                  1: { df: 1, docs: { 10: { tf: 1.0 } } },
                                  df: 0,
                                  docs: {},
                                  n: {
                                    df: 0,
                                    docs: {},
                                    o: {
                                      df: 0,
                                      docs: {},
                                      t: {
                                        "(": {
                                          0: {
                                            df: 1,
                                            docs: {
                                              11: { tf: 1.4142135623730951 },
                                            },
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                        df: 0,
                                        docs: {},
                                      },
                                    },
                                  },
                                },
                                df: 3,
                                docs: {
                                  10: { tf: 1.0 },
                                  11: { tf: 2.0 },
                                  9: { tf: 1.0 },
                                },
                              },
                            },
                            df: 0,
                            docs: {},
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              g: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  m: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        t: {
                          df: 3,
                          docs: {
                            20: { tf: 1.0 },
                            21: { tf: 1.0 },
                            7: { tf: 1.0 },
                          },
                        },
                      },
                    },
                  },
                },
              },
              r: {
                a: {
                  df: 0,
                  docs: {},
                  y: {
                    df: 3,
                    docs: { 13: { tf: 1.0 }, 2: { tf: 1.0 }, 8: { tf: 1.0 } },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            s: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  m: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                i: {
                  df: 0,
                  docs: {},
                  g: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 4,
                      docs: {
                        10: { tf: 1.4142135623730951 },
                        11: { tf: 1.0 },
                        18: { tf: 1.4142135623730951 },
                        2: { tf: 1.0 },
                      },
                    },
                  },
                },
              },
            },
          },
          b: {
            a: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                e: { df: 2, docs: { 2: { tf: 1.0 }, 6: { tf: 1.0 } } },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              h: {
                a: {
                  df: 0,
                  docs: {},
                  v: {
                    df: 1,
                    docs: { 13: { tf: 1.0 } },
                    i: {
                      df: 0,
                      docs: {},
                      o: {
                        df: 0,
                        docs: {},
                        r: {
                          df: 2,
                          docs: { 13: { tf: 1.0 }, 28: { tf: 1.0 } },
                        },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
              l: {
                df: 0,
                docs: {},
                o: { df: 0, docs: {}, w: { df: 1, docs: { 3: { tf: 1.0 } } } },
              },
            },
            i: {
              df: 0,
              docs: {},
              n: {
                a: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 3,
                      docs: { 16: { tf: 1.0 }, 2: { tf: 1.0 }, 3: { tf: 1.0 } },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
              t: {
                df: 6,
                docs: {
                  0: { tf: 1.0 },
                  10: { tf: 1.4142135623730951 },
                  11: { tf: 1.4142135623730951 },
                  13: { tf: 1.7320508075688772 },
                  14: { tf: 1.0 },
                  8: { tf: 1.0 },
                },
                r: {
                  df: 7,
                  docs: {
                    0: { tf: 1.0 },
                    20: { tf: 1.4142135623730951 },
                    21: { tf: 1.4142135623730951 },
                    22: { tf: 1.7320508075688772 },
                    29: { tf: 1.0 },
                    3: { tf: 1.7320508075688772 },
                    5: { tf: 1.4142135623730951 },
                  },
                },
                s: {
                  c: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      i: {
                        df: 0,
                        docs: {},
                        p: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 8,
                            docs: {
                              0: { tf: 1.4142135623730951 },
                              1: { tf: 1.4142135623730951 },
                              12: { tf: 1.0 },
                              14: { tf: 1.0 },
                              15: { tf: 1.0 },
                              2: { tf: 1.0 },
                              4: { tf: 1.4142135623730951 },
                              8: { tf: 1.0 },
                            },
                          },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                t: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 0: { tf: 1.0 } } },
                  },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              t: { df: 0, docs: {}, h: { df: 1, docs: { 1: { tf: 1.0 } } } },
            },
            r: {
              a: {
                c: { df: 0, docs: {}, e: { df: 1, docs: { 7: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                w: {
                  df: 0,
                  docs: {},
                  s: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      r: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            s: { df: 1, docs: { 21: { tf: 1.4142135623730951 } } },
            u: {
              df: 0,
              docs: {},
              g: {
                df: 2,
                docs: { 28: { tf: 1.0 }, 29: { tf: 1.7320508075688772 } },
              },
              t: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          c: {
            a: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 2,
                    docs: { 29: { tf: 1.0 }, 3: { tf: 1.4142135623730951 } },
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                e: {
                  df: 2,
                  docs: { 1: { tf: 1.4142135623730951 }, 10: { tf: 1.0 } },
                },
                t: {
                  df: 4,
                  docs: {
                    15: { tf: 2.0 },
                    16: { tf: 1.7320508075688772 },
                    17: { tf: 1.7320508075688772 },
                    18: { tf: 1.7320508075688772 },
                  },
                },
              },
            },
            df: 2,
            docs: { 17: { tf: 1.0 }, 18: { tf: 1.0 } },
            e: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  df: 2,
                  docs: { 10: { tf: 1.0 }, 2: { tf: 1.4142135623730951 } },
                },
              },
            },
            h: {
              a: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  g: {
                    df: 1,
                    docs: { 9: { tf: 1.0 } },
                    e: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          g: {
                            df: 3,
                            docs: {
                              23: { tf: 1.7320508075688772 },
                              24: { tf: 1.0 },
                              25: { tf: 1.0 },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                r: {
                  a: {
                    c: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
            },
            l: {
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    i: { df: 1, docs: { 29: { tf: 1.4142135623730951 } } },
                  },
                },
              },
              o: {
                df: 0,
                docs: {},
                s: { df: 0, docs: {}, e: { df: 1, docs: { 0: { tf: 1.0 } } } },
              },
            },
            o: {
              d: {
                df: 0,
                docs: {},
                e: {
                  df: 2,
                  docs: { 27: { tf: 1.0 }, 29: { tf: 1.4142135623730951 } },
                },
              },
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                m: {
                  a: {
                    df: 0,
                    docs: {},
                    n: {
                      d: {
                        df: 5,
                        docs: {
                          19: { tf: 1.7320508075688772 },
                          20: { tf: 1.0 },
                          21: { tf: 1.0 },
                          22: { tf: 1.4142135623730951 },
                          3: { tf: 1.0 },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 5: { tf: 1.0 } } },
                    },
                  },
                  i: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 25: { tf: 1.0 } } },
                  },
                  o: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 2: { tf: 1.0 } } },
                  },
                },
                p: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 2: { tf: 1.0 } } },
                  },
                },
              },
              n: {
                c: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    u: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 13: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
                f: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 3: { tf: 1.0 } } },
                    },
                  },
                },
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    d: { df: 1, docs: { 26: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
                t: {
                  a: {
                    c: {
                      df: 0,
                      docs: {},
                      t: { df: 2, docs: { 27: { tf: 1.0 }, 28: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 9: { tf: 1.0 } } },
                    },
                  },
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    i: {
                      b: {
                        df: 0,
                        docs: {},
                        u: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 4,
                            docs: {
                              26: { tf: 2.0 },
                              27: { tf: 1.0 },
                              28: { tf: 1.0 },
                              29: { tf: 1.0 },
                            },
                          },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
                v: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      i: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            r: {
              a: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      ".": {
                        df: 0,
                        docs: {},
                        i: {
                          df: 0,
                          docs: {},
                          o: { df: 1, docs: { 3: { tf: 1.0 } } },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              e: {
                a: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 3,
                    docs: {
                      27: { tf: 1.0 },
                      5: { tf: 1.0 },
                      9: { tf: 1.7320508075688772 },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            u: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                l: { df: 0, docs: {}, i: { df: 1, docs: { 7: { tf: 1.0 } } } },
              },
            },
          },
          d: {
            a: {
              df: 0,
              docs: {},
              t: {
                a: {
                  df: 1,
                  docs: { 8: { tf: 1.4142135623730951 } },
                  t: {
                    df: 0,
                    docs: {},
                    y: {
                      df: 0,
                      docs: {},
                      p: { df: 1, docs: { 15: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            b: {
              df: 0,
              docs: {},
              g: {
                df: 5,
                docs: {
                  11: { tf: 2.0 },
                  12: { tf: 2.6457513110645907 },
                  13: { tf: 2.6457513110645907 },
                  17: { tf: 2.0 },
                  6: { tf: 2.23606797749979 },
                },
              },
            },
            c: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                r: {
                  df: 4,
                  docs: {
                    14: { tf: 1.0 },
                    16: { tf: 1.0 },
                    18: { tf: 1.0 },
                    9: { tf: 1.7320508075688772 },
                  },
                },
              },
            },
            df: 2,
            docs: { 16: { tf: 1.0 }, 18: { tf: 1.0 } },
            e: {
              b: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  g: { df: 1, docs: { 6: { tf: 1.4142135623730951 } } },
                },
              },
              c: {
                a: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 16: { tf: 1.0 } } },
                  },
                },
                df: 0,
                docs: {},
                l: {
                  a: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 2,
                      docs: { 20: { tf: 1.0 }, 9: { tf: 1.7320508075688772 } },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
              n: {
                "(": {
                  1: {
                    1: {
                      0: {
                        0: { df: 1, docs: { 17: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      1: {
                        1: { df: 1, docs: { 6: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                a: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 4,
                      docs: {
                        10: { tf: 1.0 },
                        15: { tf: 1.0 },
                        16: { tf: 1.0 },
                        6: { tf: 1.0 },
                      },
                    },
                  },
                },
                df: 1,
                docs: { 6: { tf: 1.0 } },
              },
              p: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  n: {
                    d: { df: 1, docs: { 0: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  g: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 1: { tf: 1.7320508075688772 } } },
                  },
                },
              },
            },
            i: {
              a: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  r: {
                    a: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                p: {
                  df: 4,
                  docs: {
                    11: { tf: 2.0 },
                    14: { tf: 1.4142135623730951 },
                    5: { tf: 1.4142135623730951 },
                    7: { tf: 2.0 },
                  },
                  l: {
                    a: {
                      df: 0,
                      docs: {},
                      y: {
                        df: 7,
                        docs: {
                          10: { tf: 1.0 },
                          11: { tf: 1.7320508075688772 },
                          15: { tf: 1.0 },
                          22: { tf: 1.4142135623730951 },
                          5: { tf: 1.7320508075688772 },
                          6: { tf: 1.4142135623730951 },
                          7: { tf: 2.0 },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            o: {
              c: {
                df: 1,
                docs: { 28: { tf: 1.7320508075688772 } },
                u: {
                  df: 0,
                  docs: {},
                  m: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        t: { df: 1, docs: { 4: { tf: 1.0 } } },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              n: { df: 0, docs: {}, e: { df: 1, docs: { 1: { tf: 1.0 } } } },
              w: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    o: {
                      a: {
                        d: { df: 1, docs: { 3: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                m: { df: 0, docs: {}, i: { df: 1, docs: { 16: { tf: 1.0 } } } },
              },
            },
          },
          df: 0,
          docs: {},
          e: {
            ".": { df: 0, docs: {}, g: { df: 1, docs: { 27: { tf: 1.0 } } } },
            a: {
              c: { df: 0, docs: {}, h: { df: 1, docs: { 13: { tf: 1.0 } } } },
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 1: { tf: 1.0 } } },
                  },
                },
              },
            },
            d: {
              df: 0,
              docs: {},
              i: { df: 0, docs: {}, t: { df: 1, docs: { 28: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            n: {
              d: { df: 1, docs: { 20: { tf: 1.0 } } },
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 2,
                    docs: { 14: { tf: 2.0 }, 7: { tf: 1.4142135623730951 } },
                  },
                },
                i: { df: 0, docs: {}, r: { df: 1, docs: { 12: { tf: 1.0 } } } },
              },
            },
            v: {
              df: 0,
              docs: {},
              e: { df: 0, docs: {}, n: { df: 1, docs: { 13: { tf: 1.0 } } } },
            },
            x: {
              a: {
                df: 0,
                docs: {},
                m: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 4,
                      docs: {
                        1: { tf: 1.4142135623730951 },
                        10: { tf: 1.0 },
                        14: { tf: 1.0 },
                        27: { tf: 1.7320508075688772 },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 13: { tf: 1.4142135623730951 } } },
                    },
                  },
                },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    s: { df: 1, docs: { 21: { tf: 1.4142135623730951 } } },
                  },
                  r: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 0: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          f: {
            a: {
              df: 0,
              docs: {},
              r: { df: 2, docs: { 1: { tf: 1.0 }, 26: { tf: 1.0 } } },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        s: {
                          "/": {
                            df: 0,
                            docs: {},
                            f: {
                              df: 0,
                              docs: {},
                              i: {
                                df: 0,
                                docs: {},
                                x: {
                                  df: 1,
                                  docs: { 29: { tf: 1.7320508075688772 } },
                                },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            i: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                e: {
                  df: 2,
                  docs: {
                    21: { tf: 2.6457513110645907 },
                    5: { tf: 1.4142135623730951 },
                  },
                },
              },
              r: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  t: {
                    _: {
                      df: 0,
                      docs: {},
                      v: {
                        a: {
                          df: 0,
                          docs: {},
                          r: {
                            "[": {
                              ".": {
                                ".": {
                                  d: {
                                    df: 0,
                                    docs: {},
                                    e: {
                                      df: 0,
                                      docs: {},
                                      n: {
                                        "(": {
                                          1: {
                                            1: {
                                              df: 1,
                                              docs: { 10: { tf: 1.0 } },
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                        df: 0,
                                        docs: {},
                                      },
                                    },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                                df: 0,
                                docs: {},
                              },
                              0: { df: 1, docs: { 10: { tf: 1.0 } } },
                              2: {
                                ".": {
                                  ".": {
                                    4: { df: 1, docs: { 10: { tf: 1.0 } } },
                                    df: 0,
                                    docs: {},
                                  },
                                  df: 0,
                                  docs: {},
                                },
                                df: 0,
                                docs: {},
                              },
                              a: {
                                df: 0,
                                docs: {},
                                n: {
                                  d: {
                                    "(": {
                                      1: { df: 1, docs: { 10: { tf: 1.0 } } },
                                      df: 0,
                                      docs: {},
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                  df: 0,
                                  docs: {},
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 2,
                            docs: {
                              10: { tf: 2.449489742783178 },
                              9: { tf: 1.0 },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                    df: 1,
                    docs: { 21: { tf: 1.0 } },
                  },
                },
              },
            },
            l: {
              df: 0,
              docs: {},
              i: { df: 0, docs: {}, p: { df: 1, docs: { 13: { tf: 1.0 } } } },
            },
            o: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    w: { df: 1, docs: { 26: { tf: 1.0 } } },
                  },
                },
              },
              r: {
                df: 0,
                docs: {},
                m: {
                  a: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 3,
                      docs: { 15: { tf: 1.0 }, 6: { tf: 1.0 }, 7: { tf: 1.0 } },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              u: {
                df: 0,
                docs: {},
                n: { d: { df: 1, docs: { 1: { tf: 1.0 } } }, df: 0, docs: {} },
              },
            },
          },
          g: {
            a: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 5,
                  docs: {
                    0: { tf: 1.7320508075688772 },
                    1: { tf: 1.4142135623730951 },
                    12: { tf: 2.0 },
                    13: { tf: 2.0 },
                    2: { tf: 1.4142135623730951 },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, r: { df: 1, docs: { 29: { tf: 1.0 } } } },
              },
            },
            o: {
              df: 0,
              docs: {},
              t: { df: 0, docs: {}, o: { df: 1, docs: { 2: { tf: 1.0 } } } },
            },
            r: {
              df: 0,
              docs: {},
              e: {
                a: { df: 0, docs: {}, t: { df: 1, docs: { 29: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
            u: {
              df: 0,
              docs: {},
              i: { d: { df: 1, docs: { 4: { tf: 1.0 } } }, df: 0, docs: {} },
            },
          },
          h: {
            a: {
              df: 0,
              docs: {},
              n: {
                d: { df: 1, docs: { 13: { tf: 1.4142135623730951 } } },
                df: 0,
                docs: {},
              },
            },
            df: 2,
            docs: { 16: { tf: 1.0 }, 18: { tf: 1.0 } },
            e: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  o: {
                    _: {
                      df: 0,
                      docs: {},
                      w: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          r: {
                            df: 0,
                            docs: {},
                            l: {
                              d: {
                                ".": {
                                  b: {
                                    df: 1,
                                    docs: { 5: { tf: 1.4142135623730951 } },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                                df: 0,
                                docs: {},
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                      },
                    },
                    df: 1,
                    docs: { 5: { tf: 2.0 } },
                  },
                },
                p: { df: 1, docs: { 22: { tf: 1.4142135623730951 } } },
              },
              x: {
                "(": {
                  1: {
                    1: {
                      0: {
                        0: { df: 1, docs: { 17: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
                i: {
                  d: {
                    df: 0,
                    docs: {},
                    e: {
                      c: {
                        df: 0,
                        docs: {},
                        i: {
                          df: 0,
                          docs: {},
                          m: {
                            df: 2,
                            docs: { 15: { tf: 1.0 }, 16: { tf: 1.0 } },
                          },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
          },
          i: {
            d: {
              df: 0,
              docs: {},
              e: {
                a: { df: 0, docs: {}, l: { df: 1, docs: { 1: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
            df: 0,
            docs: {},
            n: {
              c: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  u: {
                    d: { df: 1, docs: { 0: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
              d: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, x: { df: 1, docs: { 10: { tf: 1.0 } } } },
                i: {
                  df: 0,
                  docs: {},
                  v: {
                    df: 0,
                    docs: {},
                    i: {
                      d: {
                        df: 0,
                        docs: {},
                        u: { df: 1, docs: { 10: { tf: 1.0 } } },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    m: { df: 1, docs: { 22: { tf: 2.0 } } },
                  },
                },
              },
              i: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  i: {
                    a: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        i: {
                          df: 0,
                          docs: {},
                          s: { df: 1, docs: { 9: { tf: 1.0 } } },
                        },
                      },
                    },
                    df: 1,
                    docs: { 25: { tf: 1.0 } },
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                t: { df: 2, docs: { 14: { tf: 1.0 }, 16: { tf: 2.0 } } },
                u: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 4,
                    docs: {
                      14: { tf: 2.0 },
                      15: { tf: 1.0 },
                      16: { tf: 1.4142135623730951 },
                      2: { tf: 1.0 },
                    },
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 2,
                      docs: { 22: { tf: 1.0 }, 3: { tf: 1.7320508075688772 } },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    p: {
                      df: 0,
                      docs: {},
                      r: {
                        df: 0,
                        docs: {},
                        e: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 3,
                            docs: {
                              0: { tf: 1.0 },
                              1: { tf: 1.0 },
                              2: { tf: 1.0 },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            s: {
              df: 0,
              docs: {},
              n: {
                "'": {
                  df: 0,
                  docs: {},
                  t: { df: 1, docs: { 15: { tf: 1.0 } } },
                },
                df: 0,
                docs: {},
              },
              s: {
                df: 0,
                docs: {},
                u: { df: 2, docs: { 27: { tf: 1.0 }, 28: { tf: 1.0 } } },
              },
            },
            t: { "'": { df: 1, docs: { 28: { tf: 1.0 } } }, df: 0, docs: {} },
          },
          l: {
            a: {
              b: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, l: { df: 1, docs: { 2: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  u: {
                    a: {
                      df: 0,
                      docs: {},
                      g: { df: 1, docs: { 1: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
              u: {
                df: 0,
                docs: {},
                n: {
                  c: {
                    df: 0,
                    docs: {},
                    h: { df: 1, docs: { 20: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                d: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      g: {
                        "/": {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            r: {
                              a: {
                                df: 0,
                                docs: {},
                                i: {
                                  df: 0,
                                  docs: {},
                                  l: { df: 1, docs: { 7: { tf: 1.0 } } },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    h: { df: 1, docs: { 9: { tf: 1.7320508075688772 } } },
                  },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              g: {
                df: 0,
                docs: {},
                i: {
                  c: {
                    df: 4,
                    docs: {
                      0: { tf: 2.0 },
                      1: { tf: 1.4142135623730951 },
                      12: { tf: 1.0 },
                      2: { tf: 1.4142135623730951 },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              o: { df: 0, docs: {}, k: { df: 1, docs: { 1: { tf: 1.0 } } } },
              t: { df: 1, docs: { 1: { tf: 1.0 } } },
            },
          },
          m: {
            a: {
              df: 0,
              docs: {},
              k: {
                df: 0,
                docs: {},
                e: { df: 2, docs: { 1: { tf: 1.0 }, 3: { tf: 1.0 } } },
              },
              n: {
                a: { df: 0, docs: {}, g: { df: 1, docs: { 29: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                s: {
                  a: {
                    df: 0,
                    docs: {},
                    g: { df: 1, docs: { 22: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                i: { c: { df: 1, docs: { 0: { tf: 1.0 } } }, df: 0, docs: {} },
              },
              n: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, m: { df: 1, docs: { 0: { tf: 1.0 } } } },
              },
            },
          },
          n: {
            a: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                e: {
                  "]": {
                    ".": {
                      b: { df: 1, docs: { 21: { tf: 1.4142135623730951 } } },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 2,
                  docs: { 21: { tf: 1.4142135623730951 }, 9: { tf: 1.0 } },
                },
              },
              n: {
                d: {
                  "(": {
                    0: { df: 1, docs: { 13: { tf: 1.0 } } },
                    1: {
                      1: {
                        0: {
                          1: { df: 1, docs: { 13: { tf: 1.0 } } },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 2,
                      docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 1,
                  docs: { 13: { tf: 1.0 } },
                },
                df: 0,
                docs: {},
              },
            },
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              r: {
                "(": {
                  0: { df: 1, docs: { 13: { tf: 1.0 } } },
                  1: {
                    1: {
                      0: {
                        1: { df: 1, docs: { 13: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 2,
                    docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              t: {
                "(": {
                  0: { df: 1, docs: { 12: { tf: 1.0 } } },
                  1: {
                    1: {
                      0: {
                        0: {
                          1: {
                            1: {
                              0: {
                                1: { df: 1, docs: { 6: { tf: 1.0 } } },
                                df: 0,
                                docs: {},
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                        1: { df: 1, docs: { 13: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 1,
                    docs: { 13: { tf: 1.0 } },
                  },
                  a: {
                    df: 0,
                    docs: {},
                    n: {
                      d: { df: 1, docs: { 13: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 13: { tf: 1.0 } } },
                  },
                },
                df: 0,
                docs: {},
                h: { df: 1, docs: { 22: { tf: 1.0 } } },
                i: { c: { df: 1, docs: { 28: { tf: 1.0 } } }, df: 0, docs: {} },
              },
              w: {
                df: 2,
                docs: { 10: { tf: 1.4142135623730951 }, 16: { tf: 2.0 } },
              },
            },
            u: {
              df: 0,
              docs: {},
              m: {
                b: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 5,
                      docs: {
                        13: { tf: 1.4142135623730951 },
                        14: { tf: 1.0 },
                        15: { tf: 1.0 },
                        16: { tf: 2.0 },
                        2: { tf: 1.0 },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          o: {
            b: {
              df: 0,
              docs: {},
              s: {
                c: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 1: { tf: 1.0 } } },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            c: {
              df: 0,
              docs: {},
              t: {
                "(": {
                  1: {
                    1: {
                      0: {
                        0: { df: 1, docs: { 17: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                a: {
                  df: 0,
                  docs: {},
                  l: { df: 2, docs: { 15: { tf: 1.0 }, 16: { tf: 1.0 } } },
                },
                df: 0,
                docs: {},
              },
            },
            d: { d: { df: 1, docs: { 13: { tf: 1.0 } } }, df: 0, docs: {} },
            df: 2,
            docs: { 16: { tf: 1.0 }, 18: { tf: 1.0 } },
            n: {
              c: { df: 1, docs: { 9: { tf: 1.0 } } },
              df: 2,
              docs: { 15: { tf: 1.0 }, 26: { tf: 1.0 } },
            },
            p: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                n: {
                  df: 3,
                  docs: {
                    27: { tf: 1.0 },
                    28: { tf: 1.4142135623730951 },
                    29: { tf: 1.0 },
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  s: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      t: { df: 2, docs: { 13: { tf: 1.0 }, 15: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            r: {
              "(": {
                0: { df: 1, docs: { 13: { tf: 1.0 } } },
                1: {
                  1: {
                    0: {
                      1: { df: 1, docs: { 13: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 2,
                  docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            u: {
              df: 0,
              docs: {},
              t: {
                df: 1,
                docs: { 22: { tf: 1.0 } },
                p: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 17: { tf: 1.4142135623730951 } } },
                  },
                },
              },
            },
            v: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  v: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        w: {
                          df: 3,
                          docs: {
                            0: { tf: 1.7320508075688772 },
                            1: { tf: 1.0 },
                            2: { tf: 1.0 },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          p: {
            a: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, r: { df: 1, docs: { 1: { tf: 1.0 } } } },
              },
            },
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                n: { df: 0, docs: {}, t: { df: 1, docs: { 12: { tf: 1.0 } } } },
              },
              s: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 15: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              e: {
                b: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        t: { df: 1, docs: { 3: { tf: 1.0 } } },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 3: { tf: 1.0 } } },
                    },
                    r: {
                      df: 0,
                      docs: {},
                      v: { df: 1, docs: { 7: { tf: 1.0 } } },
                    },
                  },
                },
              },
              i: {
                df: 0,
                docs: {},
                n: { df: 0, docs: {}, t: { df: 1, docs: { 22: { tf: 1.0 } } } },
              },
              o: {
                c: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 12: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  r: {
                    a: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 14: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                j: {
                  df: 0,
                  docs: {},
                  e: {
                    c: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 26: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                n: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    u: {
                      df: 0,
                      docs: {},
                      n: {
                        c: { df: 1, docs: { 0: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
              },
            },
            s: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                u: {
                  d: {
                    df: 0,
                    docs: {},
                    o: {
                      c: {
                        df: 0,
                        docs: {},
                        o: {
                          d: { df: 1, docs: { 0: { tf: 1.4142135623730951 } } },
                          df: 0,
                          docs: {},
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  df: 3,
                  docs: { 27: { tf: 1.0 }, 28: { tf: 1.0 }, 29: { tf: 1.0 } },
                },
              },
              t: { df: 1, docs: { 21: { tf: 1.0 } } },
            },
          },
          q: {
            df: 0,
            docs: {},
            u: {
              df: 0,
              docs: {},
              i: {
                c: {
                  df: 0,
                  docs: {},
                  k: { df: 1, docs: { 3: { tf: 1.7320508075688772 } } },
                },
                df: 0,
                docs: {},
              },
              o: { df: 0, docs: {}, t: { df: 1, docs: { 7: { tf: 1.0 } } } },
            },
          },
          r: {
            a: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                g: {
                  df: 3,
                  docs: {
                    10: { tf: 1.4142135623730951 },
                    13: { tf: 1.0 },
                    2: { tf: 1.0 },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    i: { df: 1, docs: { 15: { tf: 1.0 } } },
                  },
                },
                s: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 29: { tf: 1.0 } } },
                  },
                },
              },
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  m: {
                    b: { df: 1, docs: { 20: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                l: {
                  df: 2,
                  docs: {
                    20: { tf: 2.449489742783178 },
                    5: { tf: 1.4142135623730951 },
                  },
                },
              },
              q: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      t: {
                        df: 3,
                        docs: {
                          27: { tf: 1.0 },
                          28: { tf: 1.0 },
                          29: { tf: 1.0 },
                        },
                      },
                    },
                  },
                  i: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 21: { tf: 1.0 } } },
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                o: { df: 0, docs: {}, n: { df: 1, docs: { 28: { tf: 1.0 } } } },
              },
              t: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 13: { tf: 2.0 } } },
                  },
                },
              },
              u: {
                df: 0,
                docs: {},
                s: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            o: {
              a: {
                d: {
                  df: 0,
                  docs: {},
                  m: {
                    a: {
                      df: 0,
                      docs: {},
                      p: { df: 1, docs: { 2: { tf: 1.4142135623730951 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            u: {
              df: 0,
              docs: {},
              n: {
                df: 4,
                docs: {
                  20: { tf: 1.0 },
                  21: { tf: 2.0 },
                  3: { tf: 1.0 },
                  5: { tf: 1.4142135623730951 },
                },
                n: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 0: { tf: 1.0 } } },
                  },
                },
              },
              s: { df: 0, docs: {}, t: { df: 1, docs: { 0: { tf: 1.0 } } } },
            },
          },
          s: {
            a: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                e: {
                  df: 2,
                  docs: {
                    11: { tf: 1.4142135623730951 },
                    13: { tf: 2.6457513110645907 },
                  },
                },
              },
              v: { df: 0, docs: {}, e: { df: 1, docs: { 5: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                r: {
                  c: {
                    df: 0,
                    docs: {},
                    h: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              c: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              e: { df: 0, docs: {}, m: { df: 1, docs: { 28: { tf: 1.0 } } } },
              n: { df: 0, docs: {}, s: { df: 1, docs: { 11: { tf: 1.0 } } } },
              r: { df: 0, docs: {}, i: { df: 1, docs: { 0: { tf: 1.0 } } } },
              t: { df: 1, docs: { 10: { tf: 2.0 } } },
            },
            h: {
              a: {
                df: 0,
                docs: {},
                r: { df: 0, docs: {}, e: { df: 1, docs: { 1: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  t: { df: 1, docs: { 13: { tf: 1.4142135623730951 } } },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              g: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    f: {
                      df: 0,
                      docs: {},
                      i: {
                        c: {
                          df: 2,
                          docs: {
                            10: { tf: 1.4142135623730951 },
                            11: { tf: 1.0 },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
              },
              m: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  l: {
                    a: {
                      df: 0,
                      docs: {},
                      r: { df: 1, docs: { 0: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                p: { df: 0, docs: {}, l: { df: 1, docs: { 14: { tf: 1.0 } } } },
              },
              n: {
                df: 0,
                docs: {},
                g: {
                  df: 1,
                  docs: { 7: { tf: 1.0 } },
                  l: { df: 2, docs: { 13: { tf: 1.0 }, 2: { tf: 1.0 } } },
                },
              },
              z: { df: 0, docs: {}, e: { df: 1, docs: { 9: { tf: 1.0 } } } },
            },
            o: {
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  w: {
                    a: {
                      df: 0,
                      docs: {},
                      r: { df: 1, docs: { 1: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
              m: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  h: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      w: { df: 1, docs: { 29: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            p: {
              a: {
                c: { df: 0, docs: {}, e: { df: 1, docs: { 7: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              e: {
                c: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    f: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            t: {
              a: {
                df: 0,
                docs: {},
                n: { d: { df: 1, docs: { 0: { tf: 1.0 } } }, df: 0, docs: {} },
                r: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 3,
                    docs: {
                      20: { tf: 1.0 },
                      3: { tf: 1.7320508075688772 },
                      5: { tf: 1.0 },
                    },
                  },
                },
                t: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    m: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        n: {
                          df: 0,
                          docs: {},
                          t: { df: 1, docs: { 2: { tf: 1.0 } } },
                        },
                      },
                    },
                  },
                },
              },
              d: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, n: { df: 1, docs: { 14: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 3,
                    docs: {
                      16: { tf: 2.23606797749979 },
                      18: { tf: 2.23606797749979 },
                      8: { tf: 1.0 },
                    },
                  },
                },
              },
              r: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    g: {
                      ".": {
                        "\\": {
                          df: 0,
                          docs: {},
                          n: { df: 1, docs: { 7: { tf: 1.0 } } },
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 2,
                      docs: { 5: { tf: 1.0 }, 7: { tf: 1.4142135623730951 } },
                    },
                  },
                },
                o: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    g: { df: 1, docs: { 29: { tf: 1.0 } } },
                  },
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              r: { df: 0, docs: {}, e: { df: 1, docs: { 3: { tf: 1.0 } } } },
            },
            y: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    df: 0,
                    docs: {},
                    x: {
                      df: 15,
                      docs: {
                        10: { tf: 1.0 },
                        11: { tf: 1.0 },
                        12: { tf: 1.0 },
                        13: { tf: 1.0 },
                        14: { tf: 1.0 },
                        15: { tf: 1.0 },
                        16: { tf: 1.0 },
                        17: { tf: 1.0 },
                        18: { tf: 1.0 },
                        4: { tf: 2.0 },
                        5: { tf: 1.0 },
                        6: { tf: 1.0 },
                        7: { tf: 1.0 },
                        8: { tf: 1.0 },
                        9: { tf: 1.0 },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              s: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    m: { df: 2, docs: { 1: { tf: 1.0 }, 3: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          t: {
            a: {
              df: 0,
              docs: {},
              k: { df: 0, docs: {}, e: { df: 1, docs: { 14: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              l: { df: 0, docs: {}, l: { df: 1, docs: { 14: { tf: 1.0 } } } },
              s: {
                df: 0,
                docs: {},
                t: {
                  df: 2,
                  docs: { 0: { tf: 1.0 }, 1: { tf: 1.4142135623730951 } },
                },
              },
              x: { df: 0, docs: {}, t: { df: 1, docs: { 5: { tf: 1.0 } } } },
            },
            h: {
              a: {
                df: 0,
                docs: {},
                t: {
                  "'": { df: 1, docs: { 12: { tf: 1.0 } } },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  g: { df: 1, docs: { 15: { tf: 1.0 } } },
                  k: { df: 1, docs: { 28: { tf: 1.0 } } },
                },
              },
              r: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    g: {
                      df: 0,
                      docs: {},
                      h: { df: 2, docs: { 26: { tf: 1.0 }, 27: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            o: { df: 0, docs: {}, y: { df: 1, docs: { 1: { tf: 1.0 } } } },
            y: {
              df: 0,
              docs: {},
              p: { df: 0, docs: {}, e: { df: 1, docs: { 8: { tf: 1.0 } } } },
            },
          },
          u: {
            df: 0,
            docs: {},
            n: {
              b: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    n: {
                      d: { df: 1, docs: { 10: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
              d: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    s: {
                      c: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          r: { df: 1, docs: { 9: { tf: 1.0 } } },
                        },
                      },
                      df: 0,
                      docs: {},
                      t: {
                        a: {
                          df: 0,
                          docs: {},
                          n: {
                            d: { df: 1, docs: { 29: { tf: 1.0 } } },
                            df: 0,
                            docs: {},
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
                o: {
                  c: {
                    df: 0,
                    docs: {},
                    u: { df: 1, docs: { 28: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
              i: {
                c: {
                  df: 0,
                  docs: {},
                  o: {
                    d: { df: 1, docs: { 2: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
                df: 0,
                docs: {},
              },
              l: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  s: {
                    df: 0,
                    docs: {},
                    s: { df: 1, docs: { 29: { tf: 1.0 } } },
                  },
                },
              },
              t: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, l: { df: 1, docs: { 20: { tf: 1.0 } } } },
              },
            },
            s: {
              df: 8,
              docs: {
                0: { tf: 1.0 },
                1: { tf: 1.4142135623730951 },
                10: { tf: 1.0 },
                13: { tf: 1.0 },
                3: { tf: 1.0 },
                4: { tf: 1.0 },
                7: { tf: 1.0 },
                9: { tf: 1.0 },
              },
              e: {
                df: 0,
                docs: {},
                r: {
                  _: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        p: {
                          df: 0,
                          docs: {},
                          u: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 1,
                              docs: { 14: { tf: 1.7320508075688772 } },
                            },
                          },
                        },
                      },
                    },
                  },
                  df: 1,
                  docs: { 14: { tf: 1.4142135623730951 } },
                },
              },
              u: {
                a: { df: 0, docs: {}, l: { df: 1, docs: { 1: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
          },
          v: {
            0: {
              ".": {
                1: {
                  ".": {
                    0: { df: 1, docs: { 24: { tf: 1.4142135623730951 } } },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            a: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                u: {
                  df: 4,
                  docs: {
                    13: { tf: 1.0 },
                    2: { tf: 1.0 },
                    6: { tf: 1.0 },
                    7: { tf: 1.7320508075688772 },
                  },
                },
              },
              r: {
                df: 0,
                docs: {},
                i: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 8,
                        docs: {
                          10: { tf: 2.449489742783178 },
                          11: { tf: 1.7320508075688772 },
                          12: { tf: 1.0 },
                          15: { tf: 1.0 },
                          16: { tf: 1.0 },
                          20: { tf: 1.0 },
                          8: { tf: 1.7320508075688772 },
                          9: { tf: 2.449489742783178 },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 22: { tf: 1.4142135623730951 } } },
                    },
                  },
                },
              },
            },
          },
          w: {
            a: {
              df: 0,
              docs: {},
              r: { df: 0, docs: {}, n: { df: 1, docs: { 29: { tf: 1.0 } } } },
              y: {
                df: 4,
                docs: {
                  11: { tf: 1.0 },
                  12: { tf: 1.0 },
                  26: { tf: 1.0 },
                  27: { tf: 1.0 },
                },
              },
            },
            df: 0,
            docs: {},
            e: { b: { df: 1, docs: { 2: { tf: 1.0 } } }, df: 0, docs: {} },
            h: {
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 3,
                    docs: { 10: { tf: 1.0 }, 13: { tf: 1.0 }, 2: { tf: 1.0 } },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                h: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    u: {
                      df: 0,
                      docs: {},
                      t: { df: 2, docs: { 20: { tf: 1.0 }, 21: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                k: { df: 1, docs: { 0: { tf: 1.0 } } },
                l: {
                  d: {
                    "\\": {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 5: { tf: 1.0 } } },
                    },
                    df: 1,
                    docs: { 5: { tf: 1.7320508075688772 } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  e: { df: 2, docs: { 29: { tf: 1.0 }, 4: { tf: 1.0 } } },
                  t: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 0: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
          },
          x: {
            df: 0,
            docs: {},
            n: {
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                r: {
                  "(": {
                    0: { df: 1, docs: { 13: { tf: 1.0 } } },
                    1: {
                      1: {
                        0: {
                          1: { df: 1, docs: { 13: { tf: 1.0 } } },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 2,
                      docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 1,
                  docs: { 13: { tf: 1.0 } },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              r: {
                "(": {
                  0: { df: 1, docs: { 13: { tf: 1.0 } } },
                  1: {
                    1: {
                      0: {
                        1: { df: 1, docs: { 13: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 2,
                    docs: { 12: { tf: 1.0 }, 13: { tf: 1.4142135623730951 } },
                  },
                  df: 0,
                  docs: {},
                },
                df: 1,
                docs: { 13: { tf: 1.0 } },
              },
            },
          },
          y: {
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              u: {
                "'": {
                  df: 0,
                  docs: {},
                  v: { df: 1, docs: { 28: { tf: 1.0 } } },
                },
                df: 0,
                docs: {},
              },
            },
          },
        },
      },
      title: {
        root: {
          a: {
            d: { df: 2, docs: { 25: { tf: 1.0 }, 29: { tf: 1.0 } } },
            df: 0,
            docs: {},
            s: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  g: {
                    df: 0,
                    docs: {},
                    n: { df: 2, docs: { 10: { tf: 1.0 }, 18: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          b: {
            df: 0,
            docs: {},
            u: { df: 0, docs: {}, g: { df: 1, docs: { 29: { tf: 1.0 } } } },
          },
          c: {
            a: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                e: { df: 1, docs: { 1: { tf: 1.0 } } },
                t: {
                  df: 4,
                  docs: {
                    15: { tf: 1.0 },
                    16: { tf: 1.0 },
                    17: { tf: 1.0 },
                    18: { tf: 1.0 },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            h: {
              a: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  g: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          g: { df: 1, docs: { 23: { tf: 1.0 } } },
                        },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            o: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                m: {
                  a: {
                    df: 0,
                    docs: {},
                    n: {
                      d: { df: 1, docs: { 19: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              n: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    i: {
                      b: {
                        df: 0,
                        docs: {},
                        u: {
                          df: 0,
                          docs: {},
                          t: { df: 1, docs: { 26: { tf: 1.0 } } },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
            },
          },
          d: {
            df: 0,
            docs: {},
            e: {
              b: {
                df: 0,
                docs: {},
                u: { df: 0, docs: {}, g: { df: 1, docs: { 6: { tf: 1.0 } } } },
              },
              c: {
                df: 0,
                docs: {},
                l: {
                  a: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 9: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
            },
            i: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  l: {
                    a: {
                      df: 0,
                      docs: {},
                      y: { df: 2, docs: { 11: { tf: 1.0 }, 7: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            o: { c: { df: 1, docs: { 28: { tf: 1.0 } } }, df: 0, docs: {} },
          },
          df: 0,
          docs: {},
          e: {
            df: 0,
            docs: {},
            x: {
              a: {
                df: 0,
                docs: {},
                m: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    l: { df: 1, docs: { 27: { tf: 1.0 } } },
                  },
                },
              },
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 13: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
          },
          f: {
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        s: {
                          "/": {
                            df: 0,
                            docs: {},
                            f: {
                              df: 0,
                              docs: {},
                              i: {
                                df: 0,
                                docs: {},
                                x: { df: 1, docs: { 29: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            i: {
              df: 0,
              docs: {},
              l: { df: 0, docs: {}, e: { df: 1, docs: { 21: { tf: 1.0 } } } },
            },
          },
          g: {
            a: {
              df: 0,
              docs: {},
              t: { df: 0, docs: {}, e: { df: 1, docs: { 12: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
          },
          h: {
            a: {
              df: 0,
              docs: {},
              n: { d: { df: 1, docs: { 13: { tf: 1.0 } } }, df: 0, docs: {} },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: { df: 0, docs: {}, o: { df: 1, docs: { 5: { tf: 1.0 } } } },
              },
            },
          },
          i: {
            df: 0,
            docs: {},
            n: {
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    m: { df: 1, docs: { 22: { tf: 1.0 } } },
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  t: { df: 2, docs: { 14: { tf: 1.0 }, 16: { tf: 1.0 } } },
                },
              },
            },
          },
          o: {
            df: 0,
            docs: {},
            u: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 17: { tf: 1.0 } } },
                  },
                },
              },
            },
            v: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  v: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        w: { df: 1, docs: { 0: { tf: 1.0 } } },
                      },
                    },
                  },
                },
              },
            },
          },
          q: {
            df: 0,
            docs: {},
            u: {
              df: 0,
              docs: {},
              i: {
                c: { df: 0, docs: {}, k: { df: 1, docs: { 3: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
          },
          r: {
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              p: { df: 0, docs: {}, l: { df: 1, docs: { 20: { tf: 1.0 } } } },
            },
            o: {
              a: {
                d: {
                  df: 0,
                  docs: {},
                  m: {
                    a: {
                      df: 0,
                      docs: {},
                      p: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            u: { df: 0, docs: {}, n: { df: 1, docs: { 21: { tf: 1.0 } } } },
          },
          s: {
            df: 0,
            docs: {},
            h: {
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                r: { df: 0, docs: {}, t: { df: 1, docs: { 13: { tf: 1.0 } } } },
              },
            },
            t: {
              a: {
                df: 0,
                docs: {},
                r: { df: 0, docs: {}, t: { df: 1, docs: { 3: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
            },
            y: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    df: 0,
                    docs: {},
                    x: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
          },
          u: { df: 0, docs: {}, s: { df: 1, docs: { 1: { tf: 1.0 } } } },
          v: {
            0: {
              ".": {
                1: {
                  ".": {
                    0: { df: 1, docs: { 24: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            a: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                i: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 3,
                        docs: {
                          10: { tf: 1.0 },
                          11: { tf: 1.0 },
                          8: { tf: 1.0 },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
          },
          w: {
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                l: { d: { df: 1, docs: { 5: { tf: 1.0 } } }, df: 0, docs: {} },
              },
            },
          },
        },
      },
    },
    lang: "English",
    pipeline: ["trimmer", "stopWordFilter", "stemmer"],
    ref: "id",
    version: "0.9.5",
  },
  results_options: { limit_results: 30, teaser_word_count: 30 },
  search_options: {
    bool: "OR",
    expand: true,
    fields: {
      body: { boost: 1 },
      breadcrumbs: { boost: 1 },
      title: { boost: 2 },
    },
  },
});
