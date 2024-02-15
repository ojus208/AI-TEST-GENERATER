from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Test, MCQModel


class mcqSerializer(ModelSerializer):

    class Meta:
        model = MCQModel
        fields = ['question','option1','option2','option3','option4', 'answer']
        extra_kwargs = {'answer': {'write_only': True}}

   

class testSerializer(ModelSerializer):
    questions = serializers.PrimaryKeyRelatedField(
        queryset=MCQModel.objects.all(), many=True)

    test_obj = Test

    def create(self, validated_data):
        print(validated_data)
        questions = validated_data.pop("questions")
        test = self.test_obj.objects.create(**validated_data)
        for que in questions:
            test.questions.add(que)
        return test.id

    # questions = mcqSerializer
    class Meta:
        model = Test
        fields = ['test_name','questions']
        depth = 1


class gettestserializer(ModelSerializer):
    questions = mcqSerializer
    class Meta:
        model = Test
        fields = ['test_name', 'questions','generated_Date']
        depth = 1




