package com.model;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;


public class Dictionary {
	

	private static final Integer MIN_WORD_LENGTH_PROP = new Integer(4);
	

	private HashMap<Character, LetterNode> words = new HashMap<Character, LetterNode>();

	/**
	 * Add a word in dictionary with length >= MIN_WORD_LENGTH.
	 * */
	private void addWord(String word) {
		if (word.length() >= MIN_WORD_LENGTH_PROP) {
			LetterNode node = words.get(Character.valueOf(word.charAt(0)));

			if (node == null)
				words.put(Character.valueOf(word.charAt(0)),new LetterNode(word));
			else
				node.addWord(word);
		}
	}

	/**
	 * Load dictionary 
	 * */
	public Dictionary(String path) {
		
		String nameFile;
        File file;
        BufferedReader textreader = null;
        FileInputStream fis = null;
        InputStreamReader is = null;
        nameFile = "words.lst";
        file = new File (path + nameFile);
        
		
		try	{
			fis = new FileInputStream(file);
	        is = new InputStreamReader(fis, "UTF8");
	        textreader = new BufferedReader(is);
			String word = null;
			while ((word = textreader.readLine()) != null)
				addWord(word);
			
			textreader.close();
		} catch (FileNotFoundException fileNotFoundException) {
			
		} catch (IOException ioException) {
			
		}
	}

	/**
	 * Number of words in dictionary.
	 * */
	public int size() {
		int count = 0;

		for (LetterNode node : words.values()) {
			count += node.leafNodeCount();
		}			

		return count;
	}

	public HashMap<Character, LetterNode> getWords() {
		return words;
	}

	public void setWords(HashMap<Character, LetterNode> words) {
		this.words = words;
	}
	
}
