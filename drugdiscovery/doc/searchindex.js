Search.setIndex({docnames:["api/core","api/data","api/datasets","api/layers","api/models","api/tasks","index","introduction","notes/conv"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api/core.rst","api/data.rst","api/datasets.rst","api/layers.rst","api/models.rst","api/tasks.rst","index.rst","introduction.rst","notes/conv.rst"],objects:{"drugdiscovery.core":{Engine:[0,1,1,""],Meter:[0,1,1,""]},"drugdiscovery.core.Engine":{epoch:[0,2,1,""],evaluate:[0,3,1,""],load:[0,3,1,""],save:[0,3,1,""],train:[0,3,1,""]},"drugdiscovery.core.Meter":{log:[0,3,1,""],step:[0,3,1,""],update:[0,3,1,""]},"drugdiscovery.data":{DataLoader:[1,1,1,""],Graph:[1,1,1,""],Molecule:[1,1,1,""],PackedGraph:[1,1,1,""],PackedMolecule:[1,1,1,""]},"drugdiscovery.data.Graph":{adjacency:[1,2,1,""],cpu:[1,3,1,""],cuda:[1,3,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,3,1,""],edge_list:[1,2,1,""],edge_mask:[1,3,1,""],edge_weight:[1,2,1,""],from_dense:[1,4,1,""],full:[1,3,1,""],get_edge:[1,3,1,""],graph:[1,3,1,""],node2graph:[1,2,1,""],node:[1,3,1,""],node_mask:[1,3,1,""],pack:[1,4,1,""],repeat:[1,3,1,""],subgraph:[1,3,1,""]},"drugdiscovery.data.Molecule":{adjacency:[1,2,1,""],cpu:[1,3,1,""],cuda:[1,3,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,3,1,""],edge_list:[1,2,1,""],edge_mask:[1,3,1,""],edge_weight:[1,2,1,""],from_dense:[1,4,1,""],from_molecule:[1,4,1,""],from_smiles:[1,4,1,""],full:[1,3,1,""],get_edge:[1,3,1,""],graph:[1,3,1,""],node2graph:[1,2,1,""],node:[1,3,1,""],node_mask:[1,3,1,""],num_atom:[1,2,1,""],num_bond:[1,2,1,""],pack:[1,4,1,""],repeat:[1,3,1,""],subgraph:[1,3,1,""],to_smiles:[1,3,1,""]},"drugdiscovery.data.PackedGraph":{adjacency:[1,2,1,""],batch_size:[1,2,1,""],cpu:[1,3,1,""],cuda:[1,3,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,3,1,""],edge_list:[1,2,1,""],edge_mask:[1,3,1,""],edge_weight:[1,2,1,""],from_dense:[1,4,1,""],full:[1,3,1,""],get_edge:[1,3,1,""],get_item:[1,3,1,""],graph:[1,3,1,""],graph_mask:[1,3,1,""],node2graph:[1,2,1,""],node:[1,3,1,""],node_mask:[1,3,1,""],pack:[1,4,1,""],repeat:[1,3,1,""],subgraph:[1,3,1,""],unpack:[1,3,1,""],unpack_data:[1,3,1,""]},"drugdiscovery.data.PackedMolecule":{adjacency:[1,2,1,""],batch_size:[1,2,1,""],cpu:[1,3,1,""],cuda:[1,3,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,3,1,""],edge_list:[1,2,1,""],edge_mask:[1,3,1,""],edge_weight:[1,2,1,""],from_dense:[1,4,1,""],from_molecule:[1,4,1,""],from_smiles:[1,4,1,""],full:[1,3,1,""],get_edge:[1,3,1,""],get_item:[1,3,1,""],graph:[1,3,1,""],graph_mask:[1,3,1,""],node2graph:[1,2,1,""],node:[1,3,1,""],node_mask:[1,3,1,""],num_atom:[1,2,1,""],num_bond:[1,2,1,""],pack:[1,4,1,""],repeat:[1,3,1,""],subgraph:[1,3,1,""],to_smiles:[1,3,1,""],unpack:[1,3,1,""],unpack_data:[1,3,1,""]},"drugdiscovery.datasets":{HIV:[2,1,1,""],MoleculeDataset:[2,1,1,""],QM9:[2,1,1,""]},"drugdiscovery.layers":{common:[3,0,0,"-"],conv:[3,0,0,"-"],distribution:[3,0,0,"-"],functional:[3,0,0,"-"]},"drugdiscovery.layers.common":{GaussianSmearing:[3,1,1,""],MultiLayerPerceptron:[3,1,1,""],MutualInformation:[3,1,1,""]},"drugdiscovery.layers.common.GaussianSmearing":{forward:[3,3,1,""]},"drugdiscovery.layers.conv":{ContinuousFilterConv:[3,1,1,""],GraphConv:[3,1,1,""],GraphIsomorphismConv:[3,1,1,""],MessagePassing:[3,1,1,""],MessagePassingBase:[3,1,1,""],NeuralFingerprintConv:[3,1,1,""],RelationalGraphConv:[3,1,1,""]},"drugdiscovery.layers.conv.MessagePassingBase":{forward:[3,3,1,""]},"drugdiscovery.layers.distribution":{IndependentGaussian:[3,1,1,""]},"drugdiscovery.layers.distribution.IndependentGaussian":{forward:[3,3,1,""]},"drugdiscovery.layers.functional":{multi_slice_mask:[3,5,1,""],multinomial:[3,5,1,""],shifted_softplus:[3,5,1,""]},"drugdiscovery.models":{GCN:[4,2,1,""],GIN:[4,2,1,""],GraphConvolutionalNetwork:[4,1,1,""],GraphIsomorphismNetwork:[4,1,1,""],InfoGraph:[4,1,1,""],MPNN:[4,2,1,""],MessagePassingNeuralNetwork:[4,1,1,""],NFP:[4,2,1,""],NeuralFingerprint:[4,1,1,""],RGCN:[4,2,1,""],RelationalGraphConvolutionalNetwork:[4,1,1,""],SchNet:[4,1,1,""]},"drugdiscovery.tasks":{AutoregressiveGeneration:[5,1,1,""],PropertyPrediction:[5,1,1,""],Unsupervised:[5,1,1,""]},"drugdiscovery.tasks.Unsupervised":{forward:[5,3,1,""]},drugdiscovery:{core:[0,0,0,"-"],data:[1,0,0,"-"],datasets:[2,0,0,"-"],models:[4,0,0,"-"],tasks:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","classmethod","Python class method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:classmethod","5":"py:function"},terms:{"class":[0,1,2,3,4,5],"default":[0,1,3],"float":[0,3,4],"function":[4,5,6],"int":[0,1,3,4],"return":[0,1,3],"short":4,"true":[1,4],"while":5,For:1,The:1,There:3,_kernel:3,_relat:1,a_1:1,a_i:1,a_n:1,about:0,absolut:1,accord:1,activ:[3,4],adjac:1,afterward:5,alia:4,all:[0,3,4,5],alreadi:1,although:5,ani:[0,3],appli:[3,4],arg:1,aromat:1,array_lik:1,assert:[1,3],atom:1,atom_typ:1,attribut:1,auto:1,automat:1,autoregressivegener:5,base:[1,3],basic:1,batch:[0,1,3,4,5],batch_norm:[3,4],batch_siz:[0,1],begin:1,between:[3,4],blablabla:7,block:1,bmatrix:1,bond:1,bond_typ:1,bool:[1,3,4],both:4,call:5,can:[0,1],care:5,cdot:1,center:3,checkpoint:0,checkpoint_interv:0,chemic:1,chemistri:[3,4],classif:[3,4],classmethod:1,common:6,compact:1,comput:[1,3,5],concat:4,concat_hidden:4,connect:1,contain:1,context:1,continu:[3,4],continuousfilterconv:3,conv:6,convert:1,convolut:[3,4],copi:1,core:6,correct:1,count:1,cpu:1,creat:1,criterion:5,cuda:1,current:0,custom:[3,6],cut:4,cutoff:[3,4],data:[0,3,4,6],dataload:1,dataset:[0,1,6],ddot:1,deep:3,defin:5,dens:1,deprec:1,deriv:3,devic:1,diagon:1,dict:0,dim:3,dimens:[3,4],distribut:[0,6],doesn:3,doubl:1,drop:1,dropout:3,drugdiscoveri:8,dure:1,dynam:1,each:[1,4],edg:[1,3,4],edge2graph:1,edge_featur:1,edge_input_dim:[3,4],edge_list:1,edge_mask:1,edge_model:5,edge_weight:1,encod:4,end:[1,3],engin:0,enn:4,entri:1,epoch:0,eps:[3,4],epsilon:[3,4],equival:1,estim:[3,4],evalu:0,everi:[0,5],everyth:0,exampl:[1,3],extract:1,eye:1,fals:[0,1,3,4],fast:3,featur:[1,3],file:0,filter:[3,4],fingerprint:[3,4],follow:[0,1],former:5,forward:[3,5],from:[0,1,3,4],from_dens:1,from_molecul:1,from_smil:1,full:1,fulli:1,gaussian:3,gaussiansmear:3,gcn:4,gener:[0,3],get:[1,6],get_edg:1,get_item:1,gin:4,gpu:0,graph:[1,3,4],graph_featur:1,graph_mask:1,graphconv:3,graphconvolutionalnetwork:4,graphisomorphismconv:3,graphisomorphismnetwork:4,gru:4,handl:0,hidden:[3,4],hidden_dim:[3,4],hiv:2,hook:5,how:[3,4,8],hydrogen:1,ids:1,ignor:[1,5],implement:[1,3,4],includ:3,independ:3,independentgaussian:3,index:[1,3,6],infer:1,infograph:4,inform:[3,4],initi:[3,4],input:[3,4],input_dim:[3,4],instanc:5,instead:[0,5],interact:[3,4],introduct:6,invok:0,ismorph:4,isomorph:3,kekul:1,kernel:[3,4],kwarg:1,largest:1,last:3,latter:5,launch:0,layer:[4,6],learn:[3,4],learn_ep:[3,4],learnabl:3,length:3,level:4,like:0,likelihood:3,line:0,list:[0,1,3,4],load:0,log:0,log_interv:0,loss:4,loss_weight:4,mae:5,mai:1,manag:1,manual:0,map:1,mask:[1,3],math:[],matrix:1,maxim:[3,4],mean:3,memori:1,messag:[1,3,4,6],messagepass:3,messagepassingbas:3,messagepassingneuralnetwork:4,meter:0,metric:[0,5],minim:3,mlp:[3,4],mode:3,model:[0,3,5,6],modul:[0,3,4,5,6],mol:1,molecul:1,molecular:[3,4],moleculedataset:2,mpnn:4,mse:5,multi:3,multi_slice_mask:3,multilayerperceptron:3,multinomi:3,multipl:[0,3],mutual:[3,4],mutualinform:3,my_node_attr:1,need:5,network:[3,4],neural:[3,4],neuralfingerprint:4,neuralfingerprintconv:3,neuralfp:4,nfp:4,node2graph:1,node:[0,1,3,4],node_featur:1,node_in:1,node_mask:1,node_model:5,node_out:1,non:[1,3],none:[0,1,2,3],normal:[3,4],note:[3,8],nproc_per_nod:0,num:[1,3],num_atom:1,num_bond:1,num_edg:1,num_edge_sampl:5,num_epoch:0,num_gaussian:[3,4],num_gru_lay:4,num_kernel:3,num_lay:4,num_mlp_lay:[3,4],num_nod:1,num_node_sampl:5,num_rel:[1,3,4],num_s2s_step:4,num_sampl:3,number:[0,1,3,4],number_of_gpu:0,object:1,offset:1,one:5,oper:3,optim:0,option:[0,1,3,4],origin:[3,4],otherwis:1,output:[0,3,4],output_dim:[3,4],over:[0,1,3],overlap:3,overridden:5,pack:1,packag:6,packedgraph:1,packedmolecul:1,page:6,pair:1,paper:[3,4],parallel:0,paramet:[0,1,3,4],pass:[1,3,4,5,6],perceptron:3,perform:[0,3,5],power:[3,4],process:[1,4],progress:0,propertypredict:5,propos:4,provid:1,python:0,pytorch:3,qm9:2,quantum:[3,4],rand:1,randint:1,rate:3,rbf:[3,4],rdchem:1,rdkit:1,recip:5,record:0,refer:6,regist:[1,5],rel:1,relat:[1,3,4],relationalgraphconv:3,relationalgraphconvolutionalnetwork:4,relu:[3,4],repeat:1,replac:3,represent:[3,4],retriev:1,rgcn:4,rmse:5,run:5,s2s:4,same:3,sampl:3,save:0,scale:[3,4],schnet:[3,4],search:6,semi:[3,4],separ:4,separate_model:4,set2set:4,set:0,shape:[1,3],shift:3,shifted_softplu:[3,4],short_cut:4,should:[1,3,5],show:8,shuffl:1,sigma2:3,sigma:3,silent:[0,5],sinc:5,singl:1,size:[0,1],slice:3,smear:3,smile:[1,2],softplu:3,someth:0,sourc:[0,1,2,3,4,5],spars:1,sparsifi:3,specifi:1,split:0,start:[3,6],step:[0,3,4],stop:3,store:1,str:[0,1,3,4],string:1,subclass:5,subgraph:1,suggest:0,supervis:[3,4],surpress:0,synchron:0,take:5,target:2,task:[0,6],tensor:[1,3],test:0,test_set:0,them:5,thi:[0,1,3,4,5,8],time:1,to_smil:1,torch:[0,1,3],train:0,train_set:0,transfer:4,transform:2,tupl:1,tutori:6,two:[3,4],type:[0,1,3],unnorm:3,unpack:1,unpack_data:1,unsupervis:[4,5],updat:[0,4],use:[0,1,4],used:0,useful:1,valid:0,valid_set:0,valu:3,variad:1,varianc:3,variant:[3,4],vdot:1,verbos:[2,5],via:4,weight:[1,4],where:1,wise:1,with_hydrogen:1,within:5,you:1,your_script:0,zero:1},titles:["drugdiscovery.core","drugdiscovery.data","drugdiscovery.datasets","drugdiscovery.layers","drugdiscovery.models","drugdiscovery.tasks","Drugdiscovery - A deep learning platform for drug discovery","Drugdiscovery - A deep learning platform for drug discovery","Customize Message Passing"],titleterms:{"function":3,common:3,conv:3,core:0,custom:8,data:1,dataset:2,deep:[6,7],discoveri:[6,7],distribut:3,drug:[6,7],drugdiscoveri:[0,1,2,3,4,5,6,7],indic:6,layer:3,learn:[6,7],messag:8,model:4,pass:8,platform:[6,7],tabl:6,task:5}})