import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const QUESTIONS = [
  { key: 'gender', question: 'What is your gender?', options: ['Male', 'Female', 'Other'] },
  { key: 'age', question: 'What is your age?', input: true },
  { key: 'hairType', question: 'What is your hair type?', options: ['Straight', 'Wavy', 'Curly', 'Coily'] },
  { key: 'styleGoal', question: 'What is your style goal?', options: ['Trendy', 'Classic', 'Low Maintenance', 'Bold'] },
];

const SurveyScreen = ({ navigation }: any) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const current = QUESTIONS[step];

  const handleSelect = (value: string) => {
    setAnswers({ ...answers, [current.key]: value });
    setTimeout(() => {
      if (step < QUESTIONS.length - 1) setStep(step + 1);
      else navigation.replace('Auth');
    }, 200);
  };

  const handleInput = (value: string) => {
    setAnswers({ ...answers, [current.key]: value });
  };

  const handleNext = () => {
    if (answers[current.key]) {
      if (step < QUESTIONS.length - 1) setStep(step + 1);
      else navigation.replace('Auth');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{current.question}</Text>
      {current.options && (
        <View style={styles.optionsContainer}>
          {current.options.map((opt: string) => (
            <TouchableOpacity
              key={opt}
              style={[
                styles.option,
                answers[current.key] === opt && styles.optionSelected,
              ]}
              onPress={() => handleSelect(opt)}
            >
              <Text
                style={[
                  styles.optionText,
                  answers[current.key] === opt && styles.optionTextSelected,
                ]}
              >
                {opt}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {current.input && (
        <TextInput
          style={styles.input}
          placeholder="Enter your answer"
          value={answers[current.key] || ''}
          onChangeText={handleInput}
          keyboardType={current.key === 'age' ? 'numeric' : 'default'}
        />
      )}
      {current.input && (
        <TouchableOpacity
          style={[styles.nextButton, !answers[current.key] && styles.nextButtonDisabled]}
          onPress={handleNext}
          disabled={!answers[current.key]}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 24,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 32,
    textAlign: 'center',
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 32,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  optionSelected: {
    backgroundColor: '#007AFF',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  optionTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    marginBottom: 24,
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  nextButtonDisabled: {
    backgroundColor: '#aaa',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SurveyScreen; 