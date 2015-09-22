#!/usr/bin/env escript

-define(counts,
   #{ada => 1759768,
     ansic => 328529961,
     asm => 10258921,
     awk => 118728,
     cobol => 641,
     cpp => 181661600,
     cs => 9264487,
     csh => 62967,
     erlang => 1787694,
     exp => 941251,
     f90 => 7458285,
     fortran => 9575616,
     haskell => 1920905,
     java => 48866523,
     jsp => 73835,
     lex => 518863,
     lisp => 10845573,
     makefile => 5042078,
     ml => 3887264,
     modula3 => 1973,
     objc => 2720070,
     pascal => 5248390,
     perl => 18134770,
     php => 7806972,
     python => 33508379,
     ruby => 5047333,
     sed => 39362,
     sh => 46924404,
     sql => 4142179,
     tcl => 3023923,
     vhdl => 60971,
     xml => 47507502,
     yacc => 1232597
    }).

main(_) ->
    Max = words_max_len(),
    Min = erlang:max(words_min_len(), Max div 100),
    Normalized = normalize_counts(Min),
    print_words(Normalized).

words_max_len() ->
    MaxF = fun(_, X, Acc) -> erlang:max(X, Acc) end,
    maps:fold(MaxF, 0, ?counts).

words_min_len() ->
    MinF = fun(_, X, undefined) -> X;
              (_, X, Acc) -> erlang:min(X, Acc) end,
    maps:fold(MinF, undefined, ?counts).

normalize_counts(Basis) ->
    NormF = fun(K, X, Acc) -> maps:put(K, (X div Basis) + 1, Acc) end,
    maps:fold(NormF, #{}, ?counts).

print_words(Words) ->
    Print = fun(Word, Count) -> print_word(Word, Count) end,
    maps:map(Print, Words),
    io:format("~n").

print_word(Word, N) when N > 0 ->
    io:format("~s ", [Word]), 
    print_word(Word, N - 1);
print_word(_Word, 0) -> ok.
