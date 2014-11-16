package com.manager;


import com.model.Dictionary;

public class DictionaryManager {
	
	

	private Dictionary dictionary;	

	public DictionaryManager(String path) {		
		
		dictionary = new Dictionary(path);

		if (dictionary.size() == 0){
			throw new RuntimeException("Unable to load dictionary.");
		} else {
		}
	}

	public Dictionary getDictionary() {
		return dictionary;
	}

	public void setDictionary(Dictionary dictionary) {
		this.dictionary = dictionary;
	}
	
	
	

}
