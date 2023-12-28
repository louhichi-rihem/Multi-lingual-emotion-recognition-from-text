from flask import Flask, request, render_template,jsonify
import ktrain




app = Flask(__name__)

@app.route('/',methods=['GET'])
def home():
    return render_template('index.html')


predictor1 = ktrain.load_predictor('tf_model_eng')
predictor2 = ktrain.load_predictor('tf_model_ara')



@app.route('/', methods=['POST'])
def predict():
    # Get the user input from the request object
    user_input = request.form['input']

    if (('a'<=user_input[0]<='z') or ('A'<=user_input[0]<='Z')):
        # Generate predictions using the loaded model
        predictions = predictor1.predict(user_input)
    else:
        predictions = predictor2.predict(user_input)

    pourcentages=[]
    for i in range(11):
        pourcentages.append(predictions[i][1]*100)

    return jsonify(pourcentages)




